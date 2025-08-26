/**
 * Google Form Service for Firebase Functions
 * Handles form submissions to Google Forms
 */

import * as logger from "firebase-functions/logger";
import { googleFormConfig } from '../config';

export interface BookingData {
    orderId: string;
    paymentId?: string;
    isPaid: boolean;
    address: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    scheduledDate: string;
    scheduledTime: string;
    hours: number;
    materials: boolean;
    cleaners: number;
}

export class GoogleFormService {
    private formUrl: string;
    private formFields: any;
    private timeout: number;
    // private retryAttempts: number; // TODO: Implement retry logic

    constructor() {
        this.formUrl = googleFormConfig.formUrl;
        this.formFields = googleFormConfig.formFields;
        this.timeout = googleFormConfig.timeout;
        // this.retryAttempts = googleFormConfig.retryAttempts; // TODO: Implement retry logic
    }

    async submitBooking(booking: BookingData): Promise<boolean> {
        try {
            const formData = this.prepareFormData(booking);
            
            logger.info('Submitting booking to Google Form', {
                orderId: booking.orderId,
                customerEmail: booking.customerEmail,
                isPaid: booking.isPaid
            });

            const response = await this.makeFormRequest(formData);
            
            if (response.ok) {
                logger.info('Google Form submission successful', {
                    orderId: booking.orderId,
                    customerEmail: booking.customerEmail,
                    timestamp: new Date().toISOString()
                });
                return true;
            } else {
                throw new Error(`Google Form submission failed with status: ${response.status}`);
            }

        } catch (error) {
            logger.error('Google Form submission error', {
                error: error instanceof Error ? error.message : 'Unknown error',
                orderId: booking.orderId ?? 'unknown'
            });
            throw error;
        }
    }

    async updatePaymentStatus(transactionId: string, paymentId: string, isPaid: boolean, statusId: number, amount: number): Promise<boolean> {
        try {
            const formData = {
                [this.formFields.orderId]: transactionId,
                [this.formFields.paymentId]: paymentId,
                [this.formFields.isPaid]: isPaid ? 'true' : 'false',
                'fvv': '1',
                'pageHistory': '0'
            };

            logger.info('Updating payment status in Google Form', {
                transactionId,
                paymentId,
                isPaid,
                statusId,
                amount
            });

            const response = await this.makeFormRequest(formData);
            
            if (response.ok) {
                logger.info('Google Form updated successfully for payment', {
                    transactionId,
                    paymentId,
                    isPaid,
                    statusId,
                    amount,
                    timestamp: new Date().toISOString()
                });
                return true;
            } else {
                throw new Error(`Google Form update failed with status: ${response.status}`);
            }

        } catch (error) {
            logger.error('Failed to update Google Form for payment', {
                error: error instanceof Error ? error.message : 'Unknown error',
                transactionId
            });
            throw error;
        }
    }

    private prepareFormData(booking: BookingData): Record<string, string> {
        return {
            [this.formFields.orderId]: booking.orderId,
            [this.formFields.paymentId]: booking.paymentId || '',
            [this.formFields.isPaid]: booking.isPaid ? 'true' : 'false',
            [this.formFields.address]: booking.address,
            [this.formFields.customerName]: booking.customerName,
            [this.formFields.customerEmail]: booking.customerEmail,
            [this.formFields.customerPhone]: booking.customerPhone,
            [this.formFields.scheduledDate]: booking.scheduledDate,
            [this.formFields.scheduledTime]: booking.scheduledTime,
            [this.formFields.hours]: booking.hours.toString(),
            [this.formFields.materials]: booking.materials ? 'has materials' : 'no materials',
            [this.formFields.cleaners]: booking.cleaners.toString(),
            'fvv': '1',
            'pageHistory': '0'
        };
    }

    private async makeFormRequest(formData: Record<string, string>): Promise<Response> {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout * 1000);

        try {
            const response = await fetch(this.formUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            return response;

        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error(`Request timeout after ${this.timeout} seconds`);
            }
            throw error;
        }
    }

    async testConnection(): Promise<any> {
        try {
            const testData: BookingData = {
                orderId: 'TEST_' + Date.now(),
                customerName: 'Test Customer',
                customerEmail: 'test@example.com',
                customerPhone: '+97412345678',
                address: 'Test Address',
                hours: 1,
                materials: false,
                cleaners: 1,
                isPaid: false,
                scheduledDate: new Date().toISOString().split('T')[0],
                scheduledTime: '09:00'
            };

            const response = await this.makeFormRequest(this.prepareFormData(testData));

            return {
                success: response.ok,
                status: response.status,
                response: await response.text()
            };

        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
}
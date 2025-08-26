/**
 * Database Service for Firebase Functions
 * Handles all Firestore operations for the bookings collection
 */

import * as admin from 'firebase-admin';
import * as logger from "firebase-functions/logger";

export interface BookingRecord {
    orderId: string;
    paymentId?: string;
    transactionId?: string;
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
    serviceType: string;
    total?: number;
    paymentMethod?: string;
    createdAt: string;
    updatedAt: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export class DatabaseService {
    private db: admin.firestore.Firestore;
    private collectionName = 'bookings';

    constructor() {
        this.db = admin.firestore();
    }

    /**
     * Create a new booking record
     */
    async createBooking(bookingData: Omit<BookingRecord, 'createdAt' | 'updatedAt'>): Promise<string> {
        try {
            const now = new Date().toISOString();
            const bookingRecord: BookingRecord = {
                ...bookingData,
                createdAt: now,
                updatedAt: now
            };

            const docRef = await this.db.collection(this.collectionName).add(bookingRecord);
            
            logger.info('Booking created successfully in database', {
                orderId: bookingData.orderId,
                documentId: docRef.id,
                customerEmail: bookingData.customerEmail
            });

            return docRef.id;
        } catch (error) {
            logger.error('Error creating booking in database', {
                error: error instanceof Error ? error.message : 'Unknown error',
                orderId: bookingData.orderId
            });
            throw error;
        }
    }

    /**
     * Get booking by order ID
     */
    async getBookingByOrderId(orderId: string): Promise<BookingRecord | null> {
        try {
            const snapshot = await this.db
                .collection(this.collectionName)
                .where('orderId', '==', orderId)
                .limit(1)
                .get();

            if (snapshot.empty) {
                logger.info('No booking found for order ID', { orderId });
                return null;
            }

            const doc = snapshot.docs[0];
            const booking = doc.data() as BookingRecord;
            
            logger.info('Booking retrieved successfully from database', {
                orderId,
                documentId: doc.id,
                customerEmail: booking.customerEmail
            });

            return booking;
        } catch (error) {
            logger.error('Error retrieving booking from database', {
                error: error instanceof Error ? error.message : 'Unknown error',
                orderId
            });
            throw error;
        }
    }

    /**
     * Update payment information for a booking
     */
    async updatePaymentInfo(orderId: string, paymentId: string, transactionId: string, isPaid: boolean): Promise<void> {
        try {
            const snapshot = await this.db
                .collection(this.collectionName)
                .where('orderId', '==', orderId)
                .limit(1)
                .get();

            if (snapshot.empty) {
                throw new Error(`No booking found for order ID: ${orderId}`);
            }

            const doc = snapshot.docs[0];
            const updateData = {
                paymentId,
                transactionId,
                isPaid,
                updatedAt: new Date().toISOString(),
                status: isPaid ? 'confirmed' : 'cancelled'
            };

            await doc.ref.update(updateData);
            
            logger.info('Payment information updated successfully in database', {
                orderId,
                documentId: doc.id,
                paymentId,
                transactionId,
                isPaid
            });
        } catch (error) {
            logger.error('Error updating payment information in database', {
                error: error instanceof Error ? error.message : 'Unknown error',
                orderId,
                paymentId,
                transactionId
            });
            throw error;
        }
    }

    /**
     * Update booking status
     */
    async updateBookingStatus(orderId: string, status: BookingRecord['status']): Promise<void> {
        try {
            const snapshot = await this.db
                .collection(this.collectionName)
                .where('orderId', '==', orderId)
                .limit(1)
                .get();

            if (snapshot.empty) {
                throw new Error(`No booking found for order ID: ${orderId}`);
            }

            const doc = snapshot.docs[0];
            const updateData = {
                status,
                updatedAt: new Date().toISOString()
            };

            await doc.ref.update(updateData);
            
            logger.info('Booking status updated successfully in database', {
                orderId,
                documentId: doc.id,
                status
            });
        } catch (error) {
            logger.error('Error updating booking status in database', {
                error: error instanceof Error ? error.message : 'Unknown error',
                orderId,
                status
            });
            throw error;
        }
    }

    /**
     * Get all bookings for a customer by email
     */
    async getBookingsByCustomerEmail(customerEmail: string): Promise<BookingRecord[]> {
        try {
            const snapshot = await this.db
                .collection(this.collectionName)
                .where('customerEmail', '==', customerEmail)
                .orderBy('createdAt', 'desc')
                .get();

            const bookings: BookingRecord[] = [];
            snapshot.forEach(doc => {
                bookings.push(doc.data() as BookingRecord);
            });

            logger.info('Customer bookings retrieved successfully from database', {
                customerEmail,
                count: bookings.length
            });

            return bookings;
        } catch (error) {
            logger.error('Error retrieving customer bookings from database', {
                error: error instanceof Error ? error.message : 'Unknown error',
                customerEmail
            });
            throw error;
        }
    }

    /**
     * Delete a booking (for cleanup purposes)
     */
    async deleteBooking(orderId: string): Promise<void> {
        try {
            const snapshot = await this.db
                .collection(this.collectionName)
                .where('orderId', '==', orderId)
                .limit(1)
                .get();

            if (snapshot.empty) {
                throw new Error(`No booking found for order ID: ${orderId}`);
            }

            const doc = snapshot.docs[0];
            await doc.ref.delete();
            
            logger.info('Booking deleted successfully from database', {
                orderId,
                documentId: doc.id
            });
        } catch (error) {
            logger.error('Error deleting booking from database', {
                error: error instanceof Error ? error.message : 'Unknown error',
                orderId
            });
            throw error;
        }
    }
}

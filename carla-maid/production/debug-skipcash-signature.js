const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

// Your current SkipCash configuration
const skipCashConfig = {
  sandboxURL: 'https://skipcashtest.azurewebsites.net',
  productionURL: 'https://api.skipcash.app',
  secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
  keyId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
  clientId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8'
};

console.log('🔍 SkipCash Signature Debug Tool');
console.log('=' .repeat(60));

// Test with the exact data from your curl request
const testData = {
  amount: '140',
  currency: 'QAR',
  customerName: 'asdasd',
  customerEmail: 'mhmd97omari@gmail.cpm',
  customerPhone: '77777777',
  description: 'Cleaning Service - 1 cleaner(s), 4 hour(s)',
  returnUrl: 'https://carlamaid.qa/book-now/success',
  cancelUrl: 'https://carlamaid.qa/book-now/cancel',
  orderId: 'CARLA_1755030644628_KRY7Z828XAE'
};

console.log('📤 Input Data:');
console.log(JSON.stringify(testData, null, 2));

// Step 1: Format payment data according to SkipCash official documentation
const paymentDetails = {
  Uid: uuidv4(),
  KeyId: skipCashConfig.keyId,
  Amount: parseFloat(testData.amount).toString(),
  FirstName: testData.customerName.split(' ')[0] || testData.customerName,
  LastName: testData.customerName.split(' ').slice(1).join(' ') || '',
  Phone: testData.customerPhone || '',
  Email: testData.customerEmail,
  Street: '', // required for US, UK, and Canada cards only
  City: '', // required for US, UK, and Canada cards only
  State: '', // required for US, UK, and Canada cards only
  Country: '', // required for US, UK, and Canada cards only
  PostalCode: '', // required for US, UK, and Canada cards only
  TransactionId: testData.orderId,
  Custom1: testData.description || ''
};

console.log('\n📋 Formatted Payment Details (SkipCash Format):');
console.log(JSON.stringify(paymentDetails, null, 2));

// Step 2: Create combined data string for signature
// This is the CRITICAL part - must match SkipCash's exact format
const combinedData = [
  `Uid=${paymentDetails.Uid}`,
  `KeyId=${paymentDetails.KeyId}`,
  `Amount=${paymentDetails.Amount}`,
  `FirstName=${paymentDetails.FirstName}`,
  `LastName=${paymentDetails.LastName}`,
  `Phone=${paymentDetails.Phone}`,
  `Email=${paymentDetails.Email}`,
  `Street=${paymentDetails.Street}`,
  `City=${paymentDetails.City}`,
  `State=${paymentDetails.State}`,
  `Country=${paymentDetails.Country}`,
  `PostalCode=${paymentDetails.PostalCode}`,
  `TransactionId=${paymentDetails.TransactionId}`,
  `Custom1=${paymentDetails.Custom1}`
].join(',');

console.log('\n🔗 Combined Data String (for signature):');
console.log(combinedData);

// Step 3: Generate HMAC-SHA256 signature
const combinedDataHash = crypto
  .createHmac('sha256', skipCashConfig.secretKey)
  .update(combinedData)
  .digest('base64');

console.log('\n🔐 Generated HMAC-SHA256 Signature:');
console.log('Full signature:', combinedDataHash);
console.log('First 20 chars:', combinedDataHash.substring(0, 20) + '...');

// Step 4: Show what we'll send to SkipCash
console.log('\n📤 Request to SkipCash:');
console.log('URL:', `${skipCashConfig.sandboxURL}/api/v1/payments`);
console.log('Headers:', {
  'Authorization': combinedDataHash,
  'Content-Type': 'application/json'
});
console.log('Body:', JSON.stringify(paymentDetails, null, 2));

// Step 5: Verify signature generation
console.log('\n✅ Signature Verification:');
console.log('Secret Key (first 20 chars):', skipCashConfig.secretKey.substring(0, 20) + '...');
console.log('Data Length:', combinedData.length);
console.log('Signature Length:', combinedDataHash.length);

// Step 6: Show the official SkipCash documentation format
console.log('\n📚 Official SkipCash Documentation Format:');
console.log('From the docs:');
console.log('const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;');

console.log('\n🎯 Next Steps:');
console.log('1. Compare the combinedData string above with SkipCash\'s expected format');
console.log('2. Verify the secret key is correct');
console.log('3. Test the signature with a simple payment amount first');
console.log('4. Check if SkipCash expects different field names or order');

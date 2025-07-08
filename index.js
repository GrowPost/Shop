<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mobile Legends Top-Up Service</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 20px auto;
      padding: 10px;
      background: #f0f2f5;
    }
    h1, h2 {
      text-align: center;
      color: #e74c3c;
    }
    .package {
      background: white;
      border: 2px solid #e74c3c;
      border-radius: 8px;
      margin: 15px 0;
      padding: 15px;
      text-align: center;
    }
    label {
      display: block;
      margin: 10px 0 5px;
      font-weight: bold;
    }
    input, select, textarea {
      width: 100%;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    button {
      margin-top: 15px;
      width: 100%;
      padding: 10px;
      background-color: #e74c3c;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background-color: #c0392b;
    }
    .qr-container {
      text-align: center;
      margin: 20px 0;
    }
    .instructions {
      background: white;
      border-radius: 8px;
      padding: 15px;
      font-size: 14px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <h1>Mobile Legends Top-Up Service</h1>

  <div class="package">
    <h2>Top-Up Packages</h2>
    <ul>
      <li>100 Diamonds - $1.10</li>
      <li>500 Diamonds - $5.40</li>
      <li>1000 Diamonds - $10.50</li>
    </ul>
  </div>

  <form id="orderForm" onsubmit="return submitOrder()">
    <label for="gameId">Mobile Legends User ID</label>
    <input type="text" id="gameId" name="gameId" placeholder="Enter your ML User ID" required />

    <label for="package">Select Package</label>
    <select id="package" name="package" required>
      <option value="">--Choose a package--</option>
      <option value="100 Diamonds - $1.10">100 Diamonds - $1.10</option>
      <option value="500 Diamonds - $5.40">500 Diamonds - $5.40</option>
      <option value="1000 Diamonds - $10.50">1000 Diamonds - $10.50</option>
    </select>

    <label for="contact">Your Contact (Phone or Telegram)</label>
    <input type="text" id="contact" name="contact" placeholder="Enter your phone or Telegram" required />

    <button type="submit">Submit Order</button>
  </form>

  <div class="qr-container">
    <h2>Pay with Bakong QR</h2>
    <img src="https://example.com/your-bakong-qr-code.png" alt="Bakong QR Code" width="200" />
    <p>Scan this QR code with your Bakong app to pay.</p>
  </div>

  <div class="instructions">
    <h3>How to Order</h3>
    <ol>
      <li>Fill out the order form with your ML User ID, package, and contact info.</li>
      <li>Scan the Bakong QR code above to pay the amount of your selected package.</li>
      <li>After payment, send your payment confirmation screenshot to the contact below.</li>
      <li>We will top-up your account within 30 minutes.</li>
    </ol>
    <p><strong>Contact us on Telegram:</strong> <a href="https://t.me/yourtelegram" target="_blank">@yourtelegram</a></p>
  </div>

  <script>
    function submitOrder() {
      const gameId = document.getElementById('gameId').value.trim();
      const packageSelected = document.getElementById('package').value;
      const contact = document.getElementById('contact').value.trim();

      if (!gameId || !packageSelected || !contact) {
        alert('Please fill out all fields.');
        return false;
      }

      alert(
        'Thank you for your order!\n\n' +
        'User ID: ' + gameId + '\n' +
        'Package: ' + packageSelected + '\n' +
        'Contact: ' + contact + '\n\n' +
        'Please pay using the Bakong QR code below and send payment confirmation to our Telegram.'
      );

      // You can add code here to send form data to email or Google Sheets using services like Formspree or Google Forms.

      document.getElementById('orderForm').reset();
      return false; // prevent page reload
    }
  </script>
</body>
</html>

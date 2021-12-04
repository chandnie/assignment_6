const express = require("express");
const router = express.Router();
router.use(express.json());

const BookController = require("../Controllers/AmazonPocketController");

//Default API :Book/
router.get("/", WalletController.DefaultAPI);

//List all transaction :Book/List/
router.get("/List", BookController.ListAllTransaction);

//List all deposit transaction :Book/Type/Deposit
router.get("/Type/:TransactionType", BookController.ListAllTransactionByType);

//Total amount :Book/Total
router.get("/Total", BookController.GetTotalAmount);

//Add amount :Book/AddIn/
router.post("/AddIn", BookController.AddInWallet);

//Change amount :Book/Change/
router.put("/Change", BookController.UpdateWallet);

//Delete :Delete/1
router.delete("/Delete/:BookId", BookController.DeleteWallet);

module.exports = router;

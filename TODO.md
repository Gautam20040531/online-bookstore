# Updated TODO List for Cart Fix in Online Bookstore

## 1. Modify index.html
- Change each "Add to Cart" href from "cart.html" to specific "cart-bookname.html" for each book

## 2. Create cart-empty.html
- Empty cart page with table headers, no rows, total ₹0, "Login required to complete payment", proceed to login.html

## 3. Create cart-user.html
- Empty cart page with table headers, no rows, total ₹0, "Logged in successfully", proceed to payment.html

## 4. Create cart-bookname.html for each book
- cart-the-white-tiger.html: table with The White Tiger, Aravind Adiga, Fiction, ₹450, qty 1, remove to cart-empty.html, proceed to login.html
- cart-my-experiments-with-truth.html: table with My Experiments with Truth, Mahatma Gandhi, Autobiography, ₹300, qty 1, remove to cart-empty.html, proceed to login.html
- cart-the-god-of-small-things.html: table with The God of Small Things, Arundhati Roy, Fiction, ₹500, qty 1, remove to cart-empty.html, proceed to login.html
- cart-wings-of-fire.html: table with Wings of Fire, A.P.J. Abdul Kalam, Autobiography, ₹350, qty 1, remove to cart-empty.html, proceed to login.html
- cart-the-discovery-of-india.html: table with The Discovery of India, Jawaharlal Nehru, History, ₹400, qty 1, remove to cart-empty.html, proceed to login.html
- cart-train-to-pakistan.html: table with Train to Pakistan, Khushwant Singh, Fiction, ₹250, qty 1, remove to cart-empty.html, proceed to login.html
- cart-midnight-s-children.html: table with Midnight's Children, Salman Rushdie, Fiction, ₹550, qty 1, remove to cart-empty.html, proceed to login.html
- cart-the-inheritance-of-loss.html: table with The Inheritance of Loss, Kiran Desai, Fiction, ₹450, qty 1, remove to cart-empty.html, proceed to login.html
- cart-gandhi-an-autobiography.html: table with Gandhi: An Autobiography, Mahatma Gandhi, Autobiography, ₹320, qty 1, remove to cart-empty.html, proceed to login.html
- cart-the-namesake.html: table with The Namesake, Jhumpa Lahiri, Fiction, ₹380, qty 1, remove to cart-empty.html, proceed to login.html
- cart-interpreter-of-maladies.html: table with Interpreter of Maladies, Jhumpa Lahiri, Fiction, ₹420, qty 1, remove to cart-empty.html, proceed to login.html
- cart-the-palace-of-illusions.html: table with The Palace of Illusions, Chitra Banerjee Divakaruni, Fiction, ₹360, qty 1, remove to cart-empty.html, proceed to login.html

## 5. Modify cart.html
- Remove the hard-coded rows, make table empty, total ₹0, keep "Login required", proceed to login.html

## 6. Modify profile.html
- Change "View Cart" href from "cart.html" to "cart-user.html" ✅

## 7. Test links
- Ensure all Add to Cart go to correct pages, remove works, proceed works

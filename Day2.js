// هنا بناخد الرقمين من المستخدم
let num1 = prompt("ادخل الرقم الأول:"); // بياخد الرقم الأول كـ input
let num2 = prompt("ادخل الرقم الثاني:"); // بياخد الرقم الثاني كـ input

// نحول المدخلات من نصوص (strings) لأرقام (numbers)
num1 = Number(num1);
num2 = Number(num2);

// نطبع نتايج العمليات الحسابية المختلفة
console.log("Sum =", num1 + num2); // هنا بنجمع الرقمين
console.log("Sub =", num1 - num2); // هنا بنطرح الرقمين
console.log("Mult =", num1 * num2); // هنا بنضرب الرقمين
console.log("Div =", num1 / num2); // هنا بنقسم الرقمين
console.log("Mod =", num1 % num2); // هنا بنحسب باقي القسمة بين الرقمين

// 2. برنامج لحساب مساحة المستطيل

// هنا بنطلب من المستخدم يدخل الطول والعرض
let length = prompt("ادخل طول المستطيل:");
let width = prompt("ادخل عرض المستطيل:");

// نحول المدخلات لأرقام
length = Number(length);
width = Number(width);

// نحسب المساحة ونطبعها
let area = length * width; // المساحة = الطول * العرض
console.log("Area =", area); // نطبع النتيجة

// 3. برنامج لحساب قطر الدائرة ومحيطها ومساحتها

// هنا بناخد نصف القطر من المستخدم
let radius = prompt("ادخل نصف قطر الدائرة:");
radius = Number(radius); // نحول المدخل لرقم

// نحسب القطر، المحيط، والمساحة
let diameter = 2 * radius; // القطر = 2 * نصف القطر
let circumference = 2 * 3.14 * radius; // المحيط = 2 * π * نصف القطر
let circleArea = 3.14 * (radius * radius); // المساحة = π * (نصف القطر)^2

// نطبع النتائج
console.log("Diameter =", diameter); // نطبع القطر
console.log("Circumference =", circumference.toFixed(2)); // نطبع المحيط مع تقريب الرقم عشرياً
console.log("Area =", circleArea); // نطبع المساحة

import isEmail from "isemail";

const age: number = 123;
console.log(age);

function checkIsEmail(value: string) {
  console.log(isEmail.validate(value));
}

checkIsEmail("abc@dfg.com");
checkIsEmail("abss");

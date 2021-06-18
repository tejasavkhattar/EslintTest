const express = require("express");
const x = 1;
class A {
  foo() {
    console.log(
      "Hello World"
    ); /*error Expected 'this' to be used by class method 'foo'.*/
  }
}

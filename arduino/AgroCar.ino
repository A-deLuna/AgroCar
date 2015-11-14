#include <Servo.h>

Servo servo;

void setup() {
  Serial.begin(9600);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(7, INPUT);
  servo.attach(3);
  servo.write(180);
}

void loop() {
  int humidity = 0;
  if(digitalRead(7) == HIGH) {
    servo.write(0);
    delay(500);
    humidity = analogRead(0);
    servo.write(180);
    if(humidity > 1000) {
      digitalWrite(9, HIGH);
      digitalWrite(8, LOW);
    } else if(humidity < 50) {
      digitalWrite(9, LOW);
      digitalWrite(8, HIGH);
    } else {
      digitalWrite(9, LOW);
      digitalWrite(8, LOW);      
    }
    delay(500);
  }
}

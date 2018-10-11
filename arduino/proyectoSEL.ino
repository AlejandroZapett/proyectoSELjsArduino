const int ENTRADA1 = A0;
const int ENTRADA2 = A1;
const int ENTRADA3 = A2;
const int ENTRADA4 = A3;
const int ENTRADA5 = A4;
int dato1 = 0;
int dato2 = 0;
int dato3 = 0;
int dato4 = 0;
int dato5 = 0;

void setup() {
  Serial.begin(9600);
  while(!Serial){
    ;
  }
  Serial.println("Hola mundo desde arduino");
}

void loop() {
  // put your main code here, to run repeatedly:
  dato1 = analogRead(ENTRADA1);
  dato2 = analogRead(ENTRADA2);
  dato3 = analogRead(ENTRADA3);
  dato4 = analogRead(ENTRADA4);
  dato5 = analogRead(ENTRADA5);
  Serial.println(dato1);
  //Serial.println(dato1+','+dato2+','+dato3+','+dato4+','+dato5+',');
  delay(500);
}

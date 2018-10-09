const int ENTRADA = A0;
int dato = 0;

void setup() {
  Serial.begin(9600);
  while(!Serial){
    ;
  }
  Serial.println("Hola mundo desde arduino");
}

void loop() {
  // put your main code here, to run repeatedly:
  dato = analogRead(ENTRADA);
  Serial.println(dato);
  delay(500);
}

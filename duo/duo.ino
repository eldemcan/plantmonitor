#include "SimpleDHT.h"
#include "ArduinoJson.h"


#define DHT11_PIN 2
#define MOISTURE_PIN A0
#define MOISTURE_POWER 3

SimpleDHT11 dht11;

struct SensorData {
    int temperature = 0;
    int humidity = 0;
    int moisture = 0;
};

void setup() {
    moistureSensorSetup();
    Serial.begin(9600);
}

void moistureSensorSetup() {
    pinMode(MOISTURE_POWER, OUTPUT);
    digitalWrite(MOISTURE_POWER, LOW);
}

// max without water 4025
// submerged into water 1400-1500
int readMoisture()
{
    digitalWrite(MOISTURE_POWER, HIGH);
    delay(10);
    const int val = analogRead(MOISTURE_PIN);
//    const int dryness = map(val, 496, 1004, 0, 100);
    const int dryness = map(val, 1004, 496, 0, 100);
    digitalWrite(MOISTURE_POWER, LOW);
    return dryness;
}

int *readTemperatureHumidity() {
    // SensorData sensorData ;
    static int sensorData[2];
    byte temperature_byte = 0;
    byte humidity_byte = 0;
    const int readResult = dht11.read(DHT11_PIN, &temperature_byte, &humidity_byte, NULL);

    if (readResult != SimpleDHTErrSuccess) {
        Serial.print("Read DHT11 failed, err=");
        Serial.println(readResult);
        delay(1000);
    } else {
        sensorData[0] = (int) temperature_byte;
        sensorData[1] = (int) humidity_byte;
    }

    return sensorData;
}

void readPublishTemperatureHumidity() {
    int *dth11Data;
    dth11Data = readTemperatureHumidity();
    int moisture = readMoisture();
    SensorData sensorData;
    sensorData.temperature = dth11Data[0];
    sensorData.humidity = dth11Data[1];
    sensorData.moisture = moisture;

    createJsonObject(sensorData);
}


void createJsonObject(SensorData sensorData) {
    StaticJsonDocument<200> doc;
    doc["temperature"] = sensorData.temperature;
    doc["humidity"] = sensorData.humidity;
    doc["moisture"] = sensorData.moisture;
    serializeJson(doc, Serial);
}

void loop() {
    readPublishTemperatureHumidity();
    Serial.println("");
    delay(60000);
}

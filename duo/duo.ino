#include "SimpleDHT.h"
#include "ArduinoJson.h"

const char* wifiSid = "skyconway_com-2263";
const char* wifiPassword = "labt5c5ghc";
SimpleDHT11 dht11;
const int pinDHT11 = 2;

int temperature = 0;
int humidity = 0;
int moisture = 0;

const int moisturePin = A1;//Declare a variable for the moisture moisture sensor
const int moisturePower = 3;//Variable for moisture moisture Power

struct SensorData {
    int temperature = 0;
    int humidity = 0;
};

void setup() {
    networkSetup();
    particleSetup();
    moistureSensorSetup();
    Serial.begin(115200);
}

void moistureSensorSetup() {
    pinMode(moisturePower, OUTPUT);
    digitalWrite(moisturePower, LOW);
}

void particleSetup() {
    Particle.variable("temperature", temperature);
    Particle.variable("humidity", humidity);
}

void networkSetup() {
    WiFi.on();
    WiFi.connect();

    if (WiFi.ready()) {
        Serial.println("WiFi connected");
    } else {
        Serial.println("Could not establish connection setting credentials");
        WiFi.setCredentials(wifiSid, wifiPassword);
    }
}

// max without water 4025
// submerged into water 1400-1500

int readmoistureMoisture()
{
    digitalWrite(moisturePower, HIGH);//turn D7 "On"
    delay(10);
    const int val = analogRead(moisturePin);
    digitalWrite(moisturePower, LOW);//turn D7 "Off"
    return val;
}

SensorData readTemperatureHumidity() {
    SensorData sensorData ;
    byte temperature_byte = 0;
    byte humidity_byte = 0;
    const int readResult = dht11.read(pinDHT11, &temperature_byte, &humidity_byte, NULL);

    if (readResult != SimpleDHTErrSuccess) {
        Serial.print("Read DHT11 failed, err=");
        Serial.println(readResult);
        delay(1000);
    } else {
        sensorData.temperature = (int) temperature_byte;
        sensorData.humidity = (int) humidity_byte;
        Serial.print("Sample OK: ");
        Serial.print(temperature); Serial.print(" *C, ");
        Serial.print(humidity); Serial.println(" H");
    }
    return sensorData;
}

void readPublishTemperatureHumidity() {
    SensorData sensorData = readTemperatureHumidity();

    const String jsonData = createJsonObject(sensorData.temperature, sensorData.humidity);
    Particle.publish("temperature-humidity", jsonData);
}


String createJsonObject(const int temperature, const int humidity) {
    StaticJsonBuffer<100> jsonBuffer;
    JsonObject& root = jsonBuffer.createObject();
    root["temperature"] = temperature;
    root["humidity"] = humidity;
    char buffer[256];
    root.printTo(buffer, sizeof(buffer));
    // jsonBuffer.clear();
    return String(buffer);
}

void loop() {
    // readPublishTemperatureHumidity();
    const int moisture = readmoistureMoisture();
    Serial.print("Moisture");
    Serial.print(moisture);

    delay(1000);
}


import { Kafka } from "kafkajs";
import { IEvent, IUser } from "./model";
import { v4 as uuidv4 } from "uuid";
import * as randomstring from "randomstring"

const kafkaBroker = process.env.KAFKA_ADDR || "localhost:9092";

const kafka = new Kafka({
  clientId: "random-producer",
  brokers: [kafkaBroker],
  connectionTimeout: 3000,
});

const producer = kafka.producer({});
const topic = "pipeline-test";

export const produce = async () => {
  await producer.connect();
  let i = 0;

  setInterval(async () => {
    var event = {};
    try {
      event = {
        globalId: uuidv4(),
        event: "USER-CREATED",
        data: {
          id: uuidv4(),
          firstName: randomstring.generate(8),
          lastName: randomstring.generate(6),
          country: "USA",
          email: `${randomstring.generate(10)}@ultimateknowledge.com`,
          phoneNumber: randomstring.generate(9),
          city: "New York",
          createdAt: new Date(),
        } as IUser,
      } as IEvent;
      await producer.send({
        topic,
        acks: 1,
        messages: [
          {
            value: JSON.stringify(event),
          },
        ],
      });

      // if the message is written successfully, log it and increment `i`
      console.log("writes: ", event);
      i++;
    } catch (err) {
      console.error("could not write message " + err);
    }
  }, 5000);
};
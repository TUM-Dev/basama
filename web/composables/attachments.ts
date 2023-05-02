import { faker } from "@faker-js/faker";


export type Attachment = {
  name: string,
  preview_image: string
}


function createRandomAttachment():Attachment {
  return {
    name: faker.lorem.words(2),
    preview_image: faker.image.technics(640, 480, true)
  };
}

export function createRandomAttachments(min: number, max: number) {
  return faker.helpers.uniqueArray(createRandomAttachment, faker.datatype.number({ min, max }));
}
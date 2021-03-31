import { icons } from 'junte-ui';

export class IconTag {
  name: string;
  icons: { [key: string]: string };
}

export function iconsByTags(): IconTag[] {
  const tags: IconTag[] = [];
  for (const icon of Object.entries(icons)) {
    if (typeof icon[1] === 'object') {
      continue;
    }

    const name = icon[1].split(':')[3];
    const tag = tags.find(t => name === t.name);
    if (!!tag) {
      tag.icons[icon[0]] = icon[1];
    } else {
      tags.push({name: name, icons: {[icon[0]]: icon[1]}});
    }
  }
  console.log(tags);
  return tags;
}

import fs from 'node:fs';
import path from 'node:path';

const changelogPath = path.join(process.cwd(), '..', 'CHANGELOG.md');
const outputPath = path.join(process.cwd(), 'src', 'content', 'docs', 'Automation', 'changelog.mdx');

// Read the CHANGELOG.md file
const changelogContent = fs.readFileSync(changelogPath, 'utf-8');

// Create the Astro Starlight frontmatter
const frontmatter = `---
title: Changelog
description: A log of all notable changes to Flowcore
---

`;

// Combine frontmatter with the changelog content
// Remove the "# Changelog" header from the changelog content
const cleanedChangelogContent = changelogContent.replace(/^# Changelog\n+/, '');

// Function to replace emoji shortcodes with actual emoji characters
function replaceEmojiShortcodes(content) {
  const emojiMap = {
    ':fire:': '🔥',
    ':sparkles:': '✨',
    ':bug:': '🐛',
    ':rocket:': '🚀',
    ':memo:': '📝',
    ':zap:': '⚡️',
    ':art:': '🎨',
    ':tada:': '🎉',
    ':white_check_mark:': '✅',
    ':hammer:': '🔨',
    ':lipstick:': '💄',
    ':lock:': '🔒',
    ':apple:': '🍎',
    ':penguin:': '🐧',
    ':checkered_flag:': '🏁',
    ':robot:': '🤖',
    ':green_apple:': '🍏',
    ':bookmark:': '🔖',
    ':rotating_light:': '🚨',
    ':construction:': '🚧',
    ':green_heart:': '💚',
    ':arrow_down:': '⬇️',
    ':arrow_up:': '⬆️',
    ':pushpin:': '📌',
    ':construction_worker:': '👷',
    ':chart_with_upwards_trend:': '📈',
    ':recycle:': '♻️',
    ':heavy_minus_sign:': '➖',
    ':whale:': '🐳',
    ':heavy_plus_sign:': '➕',
    ':wrench:': '🔧',
    ':globe_with_meridians:': '🌐',
    ':pencil2:': '✏️',
    ':hankey:': '💩',
    ':rewind:': '⏪',
    ':twisted_rightwards_arrows:': '🔀',
    ':package:': '📦',
    ':alien:': '👽',
    ':truck:': '🚚',
    ':page_facing_up:': '📄',
    ':boom:': '💥',
    ':bento:': '🍱',
    ':wheelchair:': '♿️',
    ':bulb:': '💡',
    ':beers:': '🍻',
    ':speech_balloon:': '💬',
    ':card_file_box:': '🗃️',
    ':loud_sound:': '🔊',
    ':mute:': '🔇',
    ':busts_in_silhouette:': '👥',
    ':children_crossing:': '🚸',
    ':building_construction:': '🏗️',
    ':iphone:': '📱',
    ':clown_face:': '🤡',
    ':egg:': '🥚',
    ':see_no_evil:': '🙈',
    ':camera_flash:': '📸',
    ':alembic:': '⚗️',
    ':mag:': '🔍',
    ':label:': '🏷️',
    ':seedling:': '🌱',
    ':triangular_flag_on_post:': '🚩',
    ':goal_net:': '🥅',
    ':dizzy:': '💫',
    ':wastebasket:': '🗑️',
    ':passport_control:': '🛂',
    ':adhesive_bandage:': '🩹',
    ':monocle_face:': '🧐',
    ':coffin:': '⚰️',
    ':test_tube:': '🧪',
    ':necktie:': '👔',
    ':stethoscope:': '🩺',
    ':bricks:': '🧱',
    ':technologist:': '🧑‍💻',
    ':money_with_wings:': '💸'
  };

  return content.replace(/:([\w-]+):/g, (match, code) => {
    return emojiMap[match] || match;
  });
}

// Replace emoji shortcodes in the changelog content
const changelogWithEmojis = replaceEmojiShortcodes(cleanedChangelogContent);


const mdxContent = frontmatter + changelogWithEmojis;

// Write the content to the output file
fs.writeFileSync(outputPath, mdxContent);

console.log('Changelog has been successfully generated and saved to:', outputPath);

# background-color-changer

Changes the background color of a given element in a random fashion.

## Installation

```bash
npm install --save background-color-changer
```

## Usage

```javascript
import BackgroundColorChanger from 'background-color-changer';

BackgroundColorChanger(<element>, <iterations>, <interval>);
```

## Options

Argument   | Default   | Description
-----------|-----------|------------
element    | undefined | DOM Element to change the background color of
iterations | 10        | Number of times to change the background color
interval   | 1000      | Milliseconds to wait between each color change

## Notes

- The background color will start changing immediately upon instantiation
- Colors are random and guaranteed not to repeat

## Example

```javascript
import BackgroundColorChanger from 'background-color-changer';

// Cause background color to change 10 times, once per second
BackgroundColorChanger(document.body, 10, 1000);
```

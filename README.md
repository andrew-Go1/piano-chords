# Overview

<img src="https://github.com/user-attachments/assets/2620e67d-ffd1-4919-baf9-d7b78e09114f" alt="Wide Presentation" width="600">

There is result of my familiarity with `react-native` library. Before I start, I set up some goals for this project:
- improve my knowlage about React components;
- create ready-to-use product within a small amount of time;
- create small-size app (becouse react-native have bropblem with boundle size);

I deside to create an app, that could help beginer piano learner with accent on real life practice. That idea took me when I try to play piano by chords, but don't really know correct keys for every chords.

---
For minimazing app size I deside NOT to use any static images. Instead, I manually create vector `.svg` files.
First of all, I explore some background. That's how I know, that keys on piano have different size. It look something like that:

![clavier5](https://github.com/user-attachments/assets/ac5e5024-3093-4702-b72e-0d6e1179403a)

So, I create [black](https://github.com/andrew-Go1/piano-chords/blob/main/src/components/atoms/keyB.js) and [white](https://github.com/andrew-Go1/piano-chords/blob/main/src/components/atoms/keyW.js) keys and create a custom polygon path for different types.

---

It took me one and half of week to implement basic functionality and upload app to PlayMarket. (*Unfortunately, account was blocked due to updated Google politics*)

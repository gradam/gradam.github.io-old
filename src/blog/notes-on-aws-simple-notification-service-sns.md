---
date: 2020-12-02T20:59:00.530Z
title: Notes on AWS Simple Notification Service (SNS)
slug: notes-on-aws-simple-notification-service-sns
thumbnail: /assets/jamie-street-33oxtomk6ac-unsplash.jpg
---
### Notes on AWS Simple Notification Service (SNS)

SNS is a service which provides fully managed **pub/sub** messaging service in AWS cloud.

#### What is Pub/Sub?

Publish-subscribe (Pub/Sub) pattern is commonly used in messaging systems (Think notifications on your phone). In this system, the sender (**publisher)** communicate with receivers (**subscribers**) via an event bus. The bus categorizes messages into groups and receivers can then subscribe to those groups to receive every new message. 

![Pub/Sub image](/assets/pub-sub.png)

#### What can be a publisher?

Obviously, a number of AWS resources can be used as a publisher. In addition, we can also use the AWS SDK and AWS CLI.

#### What can be a subscriber?

There is a number of subscription types:

* **HTTP/S**: used for webhook. Basically, SNS sends an HTTP request to URL we define.
* **Email**: we can send an Email from SNS. It is important to remember we can only use emails in plain text. So it’s intended more for internal use. For more sophisticated emails we should use SES (Simple Email Service)
* **Email-JSON**: Sends an email with data in JSON format
* **Amazon SQS**: Puts item in Queue
* **AWS Lambda**: We can trigger Lambda function
* **SMS**: SNS can also send you an SMS
* **Platform application endpoints (Application As Subscriber)**: Pushes notification to the application (mobile, browser, etc.)

#### What is the difference between SQS and SNS?

**SQS** is pull-based. It means that the client has to ask for new items.

**SNS** is push-based. It means that the client is notified each time a new item is received by SNS.

You can find more information on SNS here: <https://aws.amazon.com/sns/>
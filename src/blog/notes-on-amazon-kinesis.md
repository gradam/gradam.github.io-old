---
date: 2020-12-03T20:45:07.667Z
title: Notes on Amazon Kinesis
slug: notes-on-amazon-kinesis
thumbnail: /assets/jeff-dewitt-k739_l2e8ko-unsplash.jpg
---
# What is it?

Amazon Kinesis is the AWS fully managed solution for **collection**, **processing** and **analyzing streaming data** in the cloud.

Kinesis can handle a huge amount of data from hundreds of thousands of sources and make it available within milliseconds for real-time processing.

**Need real time? -> Kinesis!**

# Streaming Data Examples

Streaming data source can be anything that, well… produces a constant stream of data, most of the time we receive data from multiple sources.

* Cryptocurrency Prices
* weather data
* Twitter data
* CCTV cameras
* Online games data

# 4 Types of Kinesis Streams

## Kinesis Data Streams (KDS)

![Image for post](/assets/untitled-diagram.png)

In this stream type, we have producers and consumers. We also have shards in KDS itself. With this approach, we also have the biggest flexibility in terms of what we want to do with the data inside shards and where we want to put it as we can choose an unlimited number of consumers but we have to configure them manually. Data within this stream is promised to be ordered and it can persist from **24 hours** (default) up to **168 hours**.

**How do you pay?**

You pay per running shard.

## Kinesis Firehose Delivery Stream

![Image for post](/assets/untitled-diagram-1-.png)

You can think of Firehose Delivery Stream: Data streams but simpler. It allows you to convert incoming data from one format to another, compress it and secure it.

The main differences are:

* You can only choose one consumer from a predefined list: (**S3**, **Redshift**, **Elasticsearch**, **Splunk**)
* Data disappears immediately after consumption.

**How do you pay?**

Think serverless, You pay just for the data you ingested.

## Kinesis Data Analytics (KDA)

![Image for post](/assets/data-analytis.png)

Kinesis Data Analytics is used to analyze data passed between two Kinesis streams. You can use **custom SQL** for data processing and querying. It is great for great time data analytics.

You can pass either Firehose or Data Streams as an input and an output.

## Kinesis Video Streams

![Image for post](/assets/untitled-diagram-2-.png)



Allows you to ingest video and audio data from various sources to analytics, machine learning (ML), playback, and other processing.
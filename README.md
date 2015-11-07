# Scourer

A search tool for imgur that exposes advanced search options!
Created during Node Knockout 2015!

## Installation

This version does not have an npm global install option, but it will soon
(probably).

To download and use the package with npm:

`npm install scourer`

### Authentication

This tool currently uses dotenv to load IMGUR_CLIENT_ID into `process.env` from
the environment file `.env`.  The IMGUR_CLIENT_ID is required to make Imgur API
calls.  You can get one by signing up for an Imgur account and [requesting
credentials](https://api.imgur.com/oauth2#registration).

Note: The "requesting credentials" link is
[currently broken](https://community.imgur.com/t/problem-with-imgur-api-documentation/15133)
; if it still is when you read this, just scroll down to the
"Registration" section.

## Usage

Before the full API doc is released, you can get a feel of the tool by using the
cli.  Get started by running the `help` command.

`./cli --help`

## Imgur API implementations

This package currently implements parts of Imgur's [gallery
API](https://api.imgur.com/endpoints/gallery).  The sections implemented should
be listed here.  If not, please add an issue or submit a pull request with your
fix!

* [gallery/search](https://api.imgur.com/endpoints/gallery#gallery-search)

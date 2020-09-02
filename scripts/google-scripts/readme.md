# How to install the Google Script

## Introduction

Script to automatically push the content of a form into github

## Installation

### Requirements

To use you need to have

- a github project with a branch called `gform`
- a Personal Access Token with scope repo for github - you can create via [https://github.com/settings/tokens](https://github.com/settings/tokens)

### Step 1: create form

Create a google form and a Spreadsheet associated to it with all the questions needed

### Step 2: associate a Google Script to your form

Open the spreadsheet and go on tools > Script Editor

### Step 3: create the script

Copy-past the content of `scripts/google-scripts/connect-form-to-github.gs` and modify the value of YOUR_USERNAME, YOUR_REPO, GITHUB_KEY

### Step 4: Associate script to a trigger

On the script app go Edit > Current project's triggers
Add a trigger with following values:
  _Choose which function to run_: **onFormSubmit**
  _Select event source_: **From Spreadsheet**
  _Select event type_: **On Form submit**

### Step 5: Test that your data is received

## debug

you can find the execution of the function in: [https://script.google.com/home/executions](https://script.google.com/home/executions) with potential debug

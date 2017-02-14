# Alexa Skills Development Workshop

First everyone needs to sign up for an AWS account. The easiest way to do so for students is to sign up for the [Github Student Developer Pack](https://education.github.com/pack).

If you're not a student or don't want free AWS credit, make an AWS account [here](https://aws.amazon.com/). To do so you'll need a credit card (which you don't need if you use the github pack).

Let's first create an AWS Lambda function, a Lambda function is a script that gets run when your skill is invoked.

1. navigate to https://console.aws.amazon.com/lambda/home?region=us-east-1, note that the Alexa trigger is only availible in `us-east-1` as of today.
2. Click "Get Started now"
3. Skip "Select Blueprint"
4. Select the trigger "Alexa Skills Kit"
5. Enter the name `RocketSkill`
6. Enter Description `Gets next rocket launch`
7. Change runtime to `Python 2.7`
8. Paste code from `app.py` into the text box
9. Keep "Handler" as `lambda_function.lambda_handler` (this is the function name that gets called when your skill is invoked)
10. Role: `Create custom role`
11. In the popup that pops up, keep "IAM Role" as `lambda_basic_execution` and then click allow.
12. On the previous screen (IAM should automatically close after clicking allow), leave the rest of the settings as default and click "Next"
13. Click "Create Function"
14. On the next screen click "Test" and from the test code scroll down to "Alexa Start Session"
15. If everything succeeds you'll see a green check.
16. Copy the ARN in the upper right it should look like: `arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:RocketSkill`

Now that we've setup and tested our lambda function, we need to 

1. Go to https://developer.amazon.com/alexa
2. Sign in using your AWS account
3. Click the Alexa Tab
4. Click "Get Started" on the Alexa Skills Kit box
5. Click "Add New Skill"
6. Leave Skill Type as `Custom Interaction Model`
7. Change name to `Rocket Launch Schedule`
8. Change invocation name to `Rocket Schedule`
9. Select no on Audio Player
10. Click Next
11. Paste in Intent Schema from IntentSchema.json and Sample Utterances from SampleUtterances.txt respectively. 
12. Click save and wait a wait a moment for it to evaulate your model.
13. On the next screen select "AWS Lambda ARN" and "North America"
14. Paste the Lambda ARN (Amazon Resource Name) from the upper right of your lambda function, it should look like `arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:RocketSkill`
15. Click Next

Now that you've configured an AWS Lambda function and registered your skill in the AWS Developer Portal, you can test your skill in three ways on [echosim.io](https://echosim.io), on your own Alexa device, or in the developer portal under "Service Simulator".


## Useful Links
	
1. [echosim.io](https://echosim.io) (press and hold to talk)
2. [Free Hoodie](https://developer.amazon.com/alexa-skills-kit/alexa-developer-skill-promotion)
3. [Github Student Developer Pack](https://education.github.com/pack)
4. [Tutorial with Pictures](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial)
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
9. 

Now that we've setup and tested our lambda function, we need to 

1. Go to https://developer.amazon.com/alexa
2. Sign in using your AWS account
3. Click the Alexa Tab
4. Click "Get Started" on the Alexa Skills Kit box
5. Click "Add New Skill"
6. Leave Skill Type as `Custom Interaction Model`
7. Change name to `Rocket Launch Schedule`
8. Change invocation name to `Rocket Launch`
9. Select no on Audio Player
10. Click Next
11. 
4. Copy the Lambda ARN (Amazon Resource Name) from the upper right of your lambda function, it should look like ``


## Useful Links
	
1. [echosim.io](https://echosim.io) (press and hold to talk)
2. [Free Hoodie](https://developer.amazon.com/alexa-skills-kit/alexa-developer-skill-promotion)
3. [Github Student Developer Pack](https://education.github.com/pack)

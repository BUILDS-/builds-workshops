"""
This is a Skill that gets the next launch date of a Rocket.

Speech resources and instructions for setting up are on the github:
https://github.com/BUILDS-/builds-workshops/tree/master/alexa

Sean Smith 2017
"""

from __future__ import print_function


# --------------- Helpers that build all of the responses ----------------------

def build_speechlet_response(title, output, reprompt_text, should_end_session):
    return {
        'outputSpeech': {
            'type': 'PlainText',
            'text': output
        },
        'card': {
            'type': 'Simple',
            'title': "SessionSpeechlet - " + title,
            'content': "SessionSpeechlet - " + output
        },
        'reprompt': {
            'outputSpeech': {
                'type': 'PlainText',
                'text': reprompt_text
            }
        },
        'shouldEndSession': should_end_session
    }


def build_response(session_attributes, speechlet_response):
    return {
        'version': '1.0',
        'sessionAttributes': session_attributes,
        'response': speechlet_response
    }


# --------------- Functions that control the skill's behavior ------------------

def get_welcome_response():
    """ If we wanted to initialize the session to have some attributes we could
    add those here
    """

    session_attributes = {}
    card_title = "Welcome"
    speech_output = "Welcome to Rocket Launch. " \
                    "You can ask me about future rocket launches by asking, " \
                    "When's the next rocket Launch? or Is there a launch on Sunday?"
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "Please ask me about Rockets by saying " \
                    "When's the next rocket Launch? or Is there a launch on Sunday?"
    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))


def handle_session_end_request():
    card_title = "Goodbye!"
    speech_output = " What is a spacemans favorite chocolate?" \
        "A marsbar!" \
        "Goodbye!"
    # Setting this to true ends the session and exits the skill.
    should_end_session = True
    return build_response({}, build_speechlet_response(
        card_title, speech_output, None, should_end_session))

def get_next_rockets(intent, session):
    """ 
    Handles a request to get the next Rocket Launch.
    """
    card_title = "Next Rocket Launch"
    session_attributes = {}
    
    speech_output = "February 18: SpaceX will launch a Falcon 9 rocket carrying the Dragon spacecraft on a cargo delivery mission (CRS 10) from the Kennedy Space Center in Florida to the International Space Station at 10:01 a.m. EST."
    should_end_session = True

    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, None, should_end_session))


def get_rocket_on_date(intent, session):
    """ 
    Handles a request to get a rocket on date provided.
    """

    card_title = "Rocket Launch"
    session_attributes = {}
    should_end_session = True

    if 'date' in intent['slots']:
        date = intent['slots']['date']['value']
        speech_output = "February 18: SpaceX will launch a Falcon 9 rocket carrying the Dragon spacecraft on a cargo delivery mission (CRS 10) from the Kennedy Space Center in Florida to the International Space Station at 10:01 a.m. EST."

        return build_response(session_attributes, build_speechlet_response(
            card_title, speech_output, None, should_end_session))
    else:
        return get_next_rockets(intent, session)

# --------------- Events ------------------

def on_session_started(session_started_request, session):
    """ Called when the session starts """

    print("on_session_started requestId=" + session_started_request['requestId']
          + ", sessionId=" + session['sessionId'])


def on_launch(launch_request, session):
    """ Called when the user launches the skill without specifying what they
    want
    """

    print("on_launch requestId=" + launch_request['requestId'] +
          ", sessionId=" + session['sessionId'])
    # Dispatch to your skill's launch
    return get_welcome_response()


def on_intent(intent_request, session):
    """ Called when the user specifies an intent for this skill """

    print("on_intent requestId=" + intent_request['requestId'] +
          ", sessionId=" + session['sessionId'])

    intent = intent_request['intent']
    intent_name = intent_request['intent']['name']

    # Dispatch to your skill's intent handlers
    if intent_name == "NextRocket":
        return get_next_rockets(intent, session)
    elif intent_name == "RocketOnDate":
        return get_color_from_session(intent, session)
    elif intent_name == "AMAZON.HelpIntent":
        return get_welcome_response()
    elif intent_name == "AMAZON.CancelIntent" or intent_name == "AMAZON.StopIntent":
        return handle_session_end_request()
    else:
        raise ValueError("Invalid intent")


def on_session_ended(session_ended_request, session):
    """ Called when the user ends the session.

    Is not called when the skill returns should_end_session=true
    """
    print("on_session_ended requestId=" + session_ended_request['requestId'] +
          ", sessionId=" + session['sessionId'])
    # add cleanup logic here


# --------------- Main handler ------------------

def lambda_handler(event, context):
    """ Route the incoming request based on type (LaunchRequest, IntentRequest,
    etc.) The JSON body of the request is provided in the event parameter.
    """
    print("event.session.application.applicationId=" +
          event['session']['application']['applicationId'])

    """
    Uncomment this if statement and populate with your skill's application ID to
    prevent someone else from configuring a skill that sends requests to this
    function.
    """
    # if (event['session']['application']['applicationId'] !=
    #         "amzn1.echo-sdk-ams.app.[unique-value-here]"):
    #     raise ValueError("Invalid Application ID")

    if event['session']['new']:
        on_session_started({'requestId': event['request']['requestId']},
                           event['session'])

    if event['request']['type'] == "LaunchRequest":
        return on_launch(event['request'], event['session'])
    elif event['request']['type'] == "IntentRequest":
        return on_intent(event['request'], event['session'])
    elif event['request']['type'] == "SessionEndedRequest":
        return on_session_ended(event['request'], event['session'])

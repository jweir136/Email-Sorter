"""
    THIS CODE IS USED TO FETCH AN INBOX AND ORGANIZE THE DATA.
    LAST_EMAIL is used to ensure that the program doens't need to iterate through the entire
        inbox every single time.

    '@Persistent' is used to indicate that a particular field should be stored in persistent store,
        and not a temporary variable.
"""

import imaplib
import email
import os

from tqdm import tqdm

HOST = 'imap.gmail.com'                         # @Persistent
USER = os.environ.get('IMAP_HOST')              # @Persistent
PASSWORD = os.environ.get('IMAP_PASSWORD')      # @Persistent

EMAIL_DATA = {}                                 # @Persistent
LAST_EMAIL = None                               # @Persistent

if __name__ == "__main__":
    # (1)   CREATE THE IMAP SERVER TO CONNECT TO
    imap = imaplib.IMAP4_SSL(HOST)

    # (2)   LOGIN INTO THE IMAP SERVER AS A PARTICULAR USER AND SELECT INBOX
    imap.login(USER, PASSWORD)
    imap.select("Inbox")

    print("Logged In!")

    tmp, messages = imap.search(None, 'ALL')
    for num in tqdm(messages[0].split()):
        tmp, data = imap.fetch(num, "(RFC822)")

        email_message = email.message_from_bytes(data[0][1])
        date_, from_, subject_ = email_message['Date'], email_message['From'], email_message['Subject']
        email_json = { "Date":date_, "From": from_, "Subject":subject_, "ID": num}

        if not from_ in EMAIL_DATA:
            EMAIL_DATA[from_] = [email_json]
        else:
            EMAIL_DATA[from_].append(email_json)

        if LAST_EMAIL and str(email_json) == LAST_EMAIL:
            break

    print(EMAIL_DATA)
            
    # (3)   CLOSE ALL CONNECTIONS AND LOGOUT
    imap.close()
    imap.logout()
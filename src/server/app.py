import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from credentials import password
from credentials import sender_mail
from credentials import receiver_mail
from fastapi.middleware.cors import CORSMiddleware
import random
from fastapi import FastAPI

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send_otp")
async def send_mail(data : dict):
    user_email = data.get("email")
    user_password = data.get("password")
    role = data.get("role")
    print(user_email, user_password, role)
    try:
        subject = "One Time Password (OTP) for Login"
        otp = random.randint(10000, 99999)
        message = f"Hello, Your OTP for login is {otp}"
        msg = MIMEMultipart()
        msg['From'] = sender_mail
        msg['To'] = user_email
        msg['Subject'] = subject
        msg.attach(MIMEText(message, 'plain'))
        try:
            with smtplib.SMTP('smtp.gmail.com', 587) as server:
                server.starttls()
                server.login(sender_mail, password)
                text = msg.as_string()
                server.sendmail(sender_mail, receiver_mail, text)
                response = {
                    "otp": otp,
                    "message": "Ok"
                }
                server.quit()
                return response
        except Exception as e:
            return {"message": "An Error Occurred while sending a mail!"}
    except Exception as e:
        return {"message": "An Error Occurred"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
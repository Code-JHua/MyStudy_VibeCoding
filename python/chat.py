from openai import OpenAI
import os
from dotenv import load_dotenv
import pathlib

# 获取当前文件所在目录
current_dir = pathlib.Path(__file__).parent.absolute()
# 获取项目根目录
root_dir = current_dir.parent
# 加载项目根目录中的 .env 文件
load_dotenv(os.path.join(root_dir, '.env'))

# 打印环境变量，用于调试
api_key = os.getenv("DEEPSEEK_API_KEY")
print(f"加载的 API 密钥: {api_key[:5]}...{api_key[-5:] if api_key else None}")

client = OpenAI(
    api_key=os.getenv("DEEPSEEK_API_KEY"),  
    base_url="https://api.deepseek.com/v1"
)

completion = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "你是一个乒乓球领域的专家，请帮我回答与乒乓球相关的问题"},
        {"role": "user", "content": "王楚钦是世界第几？"},
    ],
)

# 打印完整的响应对象，了解其结构
print('响应对象结构：')
print(completion.choices[0].message)

print('回答：')
print(completion.choices[0].message.content)

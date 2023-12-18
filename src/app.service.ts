import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { PREMIERE_PRO } from './constants/message';

@Injectable()
export class AppService {
  private readonly openai: OpenAI;
  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  async createPreset(user_input: string) {
    const newState: ChatCompletionMessageParam = {
      role: 'user',
      content: user_input,
    };
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      messages: PREMIERE_PRO.concat(newState),
      temperature: 1,
      max_tokens: 4095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const prompt = response.choices[0].message.content;
    return JSON.parse(prompt);
  }

  getHello() {
    return 'hello';
  }
}

import { TranslateCompiler } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

export function translateCompilerFactory(): TranslateCompiler {
  return new TranslateMessageFormatCompiler();
}

import { LanguageSelector } from '@/components/code-panel/language-selector';
import { languages } from '@/data/languages';
import { Editor, useMonaco } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { editor } from 'monaco-editor';
import * as Y from 'yjs';
import { MonacoBinding } from 'y-monaco';
import { WebsocketProvider } from 'y-websocket';
import IStandaloneThemeData = editor.IStandaloneThemeData;
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

export default function CodePanel() {
  const [language, setLanguage] = useState(languages.at(0)!!);
  const monaco = useMonaco();
  const { resolvedTheme } = useTheme();
  const options = {
    selectOnLineNumbers: true, // Select line by clicking on line number
    theme: 'code-pair-dark',
    minimap: {
      enabled: false, // Minimap gives an overview of code(present on right side in vscode)
    },
  };
  const code_pair_dark: IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#020817',
    },
  };
  const bindEditor = function(editor: IStandaloneCodeEditor) {
    const doc = new Y.Doc();
    const type = doc.getText('monaco');
    const wsProvider = new WebsocketProvider(
      'ws://localhost:8000',
      'test-room',
      doc,
    );

    wsProvider.on('status', (event: { status: any }) => {
      console.log(event.status); // logs "connected" or "disconnected"
    });

    const monacoBinding = new MonacoBinding(
      type,
      editor.getModel() as editor.ITextModel,
      new Set([editor]),
      wsProvider.awareness,
    );

    if (wsProvider.shouldConnect) wsProvider.connect();
  };

  useEffect(() => {
    monaco?.editor.setTheme(
      resolvedTheme === 'light' ? 'vs-light' : 'code-pair-dark',
    );
  }, [monaco, resolvedTheme, language]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex w-full flex-row items-baseline justify-between bg-secondary">
        <div className="mx-6 h-4 text-sm text-primary">{`Main.${language.extension}`}</div>
        <LanguageSelector
          defaultLanguage="javascript"
          onLanguageSelected={(language) => {
            setLanguage(language);
          }}
        />
      </div>
      <Editor
        language={language?.value}
        options={options}
        onMount={(editor, monaco) => {
          monaco?.editor.defineTheme('code-pair-dark', code_pair_dark);
          monaco?.editor.setTheme(
            resolvedTheme === 'light' ? 'vs-light' : 'code-pair-dark',
          );

          bindEditor(editor);
        }}
        onChange={() => {}}
      />
    </div>
  );
}

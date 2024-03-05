interface LanguageMetadata {
  value: string;
  label: string;
  extension: string;
}

const languages: LanguageMetadata[] = [
  {
    value: 'javascript',
    label: 'JS',
    extension: 'js',
  },
  {
    value: 'java',
    label: 'Java',
    extension: 'java',
  },
  {
    value: 'python3',
    label: 'Python 3',
    extension: 'py',
  },
  {
    value: 'cpp',
    label: 'C++',
    extension: 'cpp',
  },
];

export type { LanguageMetadata };
export { languages };

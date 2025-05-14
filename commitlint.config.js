module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Tính năng mới
        'fix', // Sửa lỗi (thay cho 'fix' chuẩn)
        'docs', // Thay đổi tài liệu
        'style', // Thay đổi không ảnh hưởng đến code (formatting, etc)
        'refactor', // Refactor code
        'test', // Thêm hoặc sửa tests
        'chore', // Những thay đổi không liên quan đến src hoặc test
        'perf', // Cải thiện hiệu năng
        'ci', // Thay đổi CI configuration
        'build', // Thay đổi build system
        'revert', // Revert commit trước đó
      ],
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [0, 'always', []],
    'header-max-length': [2, 'always', 100],
  },
};

module.exports = {
  make_targets: {
    win32: [
      'squirrel'
    ],
    darwin: [
      'zip'
    ],
    linux: [
      'deb',
      'rpm'
    ]
  },
  electronPackagerConfig: {
    packageManager: 'yarn'
  },
  electronWinstallerConfig: {
    name: 'boggle'
  },
  electronInstallerDebian: {},
  electronInstallerRedhat: {},
  github_repository: {
    owner: '',
    name: ''
  },
  windowsStoreConfig: {
    packageName: '',
    name: 'boggle'
  }
}

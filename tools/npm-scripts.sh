cleanJS() {
  # Paths are relative to SAM-types root directory, not "tools/"
  find ./types \( -name '.DS_Store' -or -name '._*' -or -name '*.js' -or -name '*.js.map' \) -delete
}
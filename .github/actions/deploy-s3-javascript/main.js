const core = require('@actions/core')
import github from '@actions/github'
import exec from '@actions/exec'
function run(){
    core.notice('hello from js')
}

run();
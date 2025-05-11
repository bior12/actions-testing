import * as core from '@actions/core'

async function run(): Promise<void> {
    core.info("Starting zipper")

    const filePath = core.getInput("file-path")

    core.info(`Filepath = ${filePath}`)

    core.setOutput('output-file-path', filePath)

    core.info('DONE!')
}
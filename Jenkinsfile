pipeline{
	agent any

	stages{
		stage('branch name'){

			steps{
				echo "${env.BRANCH_NAME}"

				sh '''
					printenv

				'''
			}
		}

		stage('main'){
			when {
				branch 'main'
			}
			steps{
				echo "${env.BRANCH_NAME}"
				echo "${BRANCH_NAME}"

				sh '''
					printenv
				'''
				echo "This is Master branch Execution"
				script {
					def props = readProperties file: 'gitversion.properties'
					env.GitVersion_SemVer = props.GitVersion_SemVer
					env.GitVersion_FullSemVer = props.GitVersion_FullSemVer
					env.GitVersion_BranchName = props.GitVersion_BranchName
					env.GitVersion_AssemblySemVer = props.GitVersion_AssemblySemVer
					env.GitVersion_MajorMinorPatch = props.GitVersion_MajorMinorPatch
					env.GitVersion_Sha = props.GitVersion_Sha
					echo env.GitVersion_SemVer
					echo env.GitVersion_MajorMinorPatch
					echo env.GitVersion_FullSemVer
				}
			}
		}
    
		stage('development'){
			when {
				branch "development"
			}
			steps{
				echo "${env.BRANCH_NAME}"
				echo "${BRANCH_NAME}"
				sh '''
					printenv
				'''

				echo "This is Major branch Execution"
				script {
						def props = readProperties file: 'gitversion.properties'
						env.GitVersion_SemVer = props.GitVersion_SemVer
						env.GitVersion_FullSemVer = props.GitVersion_FullSemVer
						env.GitVersion_BranchName = props.GitVersion_BranchName
						env.GitVersion_AssemblySemVer = props.GitVersion_AssemblySemVer
						env.GitVersion_MajorMinorPatch = props.GitVersion_MajorMinorPatch
						env.GitVersion_Sha = props.GitVersion_Sha
						echo env.GitVersion_SemVer
						echo env.GitVersion_MajorMinorPatch
						echo env.GitVersion_FullSemVer
					}
			}
		}
	}
}

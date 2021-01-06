lilbud manipulateImage `
--operation "generateSignatures" `

	const args = {
		pathIn: "./test/Signatures_In",
		pathOut: "./test/Signatures_Out",
		numColsOut: 4,
		numRowsOut: 16,
		widthOut: 4096,
		heightOut: 4096,
		normalize: true
	}
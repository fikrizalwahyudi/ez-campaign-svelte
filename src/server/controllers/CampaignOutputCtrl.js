exports.generatePDF = async (req, res) => {
    const inspectModule = new InspectModule();
    const content = fs.readFileSync(path.resolve(__dirname, '../../configs/templates/tempeasyupgradesyariah.docx'), 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater();

    doc.loadZip(zip);
    doc.attachModule(imageModule);
    doc.attachModule(inspectModule);
    //set the templatevariables
    doc.setData({
        first_name: req.body.policyAfter.lifeNameMain,
        phone: req.body.phoneNumber,
        description: 'New Website',
        agent_number: req.body.policyAfter.agentNumber,
        policy_number: req.body.policyAfter.policyNumber
    });

    try {
        doc.render()
    }
    catch (error) {
        const e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        }
        // console.log(JSON.stringify({error: e}));
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
        throw error;
    }

    const buf = doc.getZip() .generate({type: 'nodebuffer'});
    // console.log(buf);
    // fs.writeFileSync(path.resolve(__dirname, '../../output/output.docx'), buf);

    //24-sept
    docxToPdfConverter.init({
        ND_DEV_ID: "4B40GKEJ1T5AHSCH4KBLQKED2C",    // goto https://developers.nativedocuments.com/ to get a dev-id/dev-secret
        ND_DEV_SECRET: "7GBSLJUD1MJBEKE52B00FC113U", // you can also set the credentials in the enviroment variables
        ENVIRONMENT: "NODE", // required
        LAZY_INIT: true      // if set to false the WASM engine will be initialized right now, usefull pre-caching (like e.g. for AWS lambda)
    }).catch( function(e) {
        // console.error(e);
    });
    
    async function convertHelper(document, exportFct) {
        const api = await docxToPdfConverter.engine();
        await api.load(document);
        const arrayBuffer = await api[exportFct]();
        await api.close();
        return arrayBuffer;
    }
    
    convertHelper(buf, "exportPDF").then((arrayBuffer) => {
        // console.log("masuk helper", req.body.policyAfter.policyNumber + " " + req.body.policyAfter.tokenOTP);
        fs.writeFileSync(path.resolve(__dirname, '../../output/'+req.body.policyAfter.policyNumber+'.pdf'), new Uint8Array(arrayBuffer));
        return res.status(200).json({
            'message': `pdf generator successfully`,
            'data': 'testing'
        });

    }).catch((e) => {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
        // console.error(e);
    });
}
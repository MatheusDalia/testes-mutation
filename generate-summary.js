const fs = require("fs");
const path = require("path");

if (process.argv.length < 4) {
  console.error(
    "Usage: node generate-summary.js <input-report-path> <output-summary-path>"
  );
  process.exit(1);
}

const reportPath = path.resolve(process.argv[2]);
const summaryPath = path.resolve(process.argv[3]);

try {
  console.log(`Reading report from ${reportPath}...`);
  if (!fs.existsSync(reportPath)) {
    throw new Error(`File not found: ${reportPath}`);
  }
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));

  const summary = {
    schemaVersion: report.schemaVersion,
    thresholds: report.thresholds,
    projectRoot: report.projectRoot,
    files: {},
  };

  let totalMutants = 0;
  let survivingMutants = 0;
  let filesWithSurvivors = 0;

  for (const [fileName, fileData] of Object.entries(report.files)) {
    if (fileData.mutants.length > 0) {
      summary.files[fileName] = {
        language: fileData.language,
        // Source is omitted to reduce size
        mutants: fileData.mutants,
      };
      survivingMutants += fileData.mutants.length;
      filesWithSurvivors++;
    }
    totalMutants += fileData.mutants.length;
  }

  console.log("Processing complete.");
  console.log(`Total Mutants: ${totalMutants}`);
  console.log(`Surviving Mutants: ${survivingMutants}`);
  console.log(`Files with Survivors: ${filesWithSurvivors}`);

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  fs.unlinkSync(reportPath);
  console.log(`Summary written to ${summaryPath}`);
} catch (error) {
  console.error("Error processing report:", error.message);
  process.exit(1);
}

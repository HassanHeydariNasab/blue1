import * as Collections from "./collections";
import * as SharedModels from "./shared-models";
import { generateProject, app } from "./utils";

const application = app({
  id: "blue",
  sharedModels: Object.values(SharedModels),
  collections: Object.values(Collections),
});

generateProject(application, {
  // Mark this as true when you want to override even the non-overridable files
  // override: true,
});

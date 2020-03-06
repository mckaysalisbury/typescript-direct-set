interface I {
  optional?: (I | null);
  required: number;
}

const w: I = {
  optional: { required: 2 },
  required: 1
};

w.optional.required; // I can kind of see why this complains. I explicitly declared that the type of the variable at the time of setting can be nullable


let workaround: I;
workaround = {
  optional: { required: 2 },
  required: 1
};

workaround.optional.required;  // This one I think is wrong. I'm explicitly setting the 

const workaroundToWorkaround: I = {
  required: 1,
};
workaroundToWorkaround.optional = { required: 1 }; // So I have to explicitly state that the value of this property is not null to get the intended behavior

workaroundToWorkaround.optional.required; // This one doesn't have a problem

const alternateWorkaroundToWorkaround: I = {
  optional: { required: 1 },
  required: 1,
};

alternateWorkaroundToWorkaround.optional!.required; // This shouldn't be necessary. Eew.

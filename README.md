This seems to me to be undesirable behavior in typescript. It should know that the objects can't be null.

To reproduce:

    tsc

The file `repro.ts` has some comments explaining the behavior.

It was tested to have this behavior on the following versions:

 * 3.7.2
 * 3.9.0-dev.20200305

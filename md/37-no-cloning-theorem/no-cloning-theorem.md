# No-Cloning Theorem

There exists no unitary operator $`U`$ that can clone a qubit.
Note that $`\otimes`$ is the [[tensor-product]].
``` math
C(\left\lvert \psi \right\rangle)=\left\lvert \psi \right\rangle\otimes\left\lvert \psi \right\rangle
```

Proof

Let
``` math
C\left\lvert 0 \right\rangle\rightarrow\left\lvert 0 \right\rangle\left\lvert 0 \right\rangle
```
``` math
C\left\lvert 1 \right\rangle\rightarrow\left\lvert 1 \right\rangle\left\lvert 1 \right\rangle
```

Then

``` math
C\left\lvert + \right\rangle\rightarrow=C\frac{\left\lvert 0 \right\rangle+\left\lvert 1 \right\rangle}{2}\\
```
``` math
\neq\frac{1}{\sqrt{2}}(\left\lvert 0 \right\rangle\left\lvert 0 \right\rangle+\left\lvert 1 \right\rangle\left\lvert 1 \right\rangle)\\
```
``` math
\neq \left\lvert + \right\rangle\left\lvert + \right\rangle
```
This breaks the [[operators|linearity of operators]].

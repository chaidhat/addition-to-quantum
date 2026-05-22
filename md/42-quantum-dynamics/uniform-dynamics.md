# Uniform dynamics

This is a time-indepndent Hamiltonian $`H(t)=H`$.

We set an ODE for $`U`$ which we derived earlier.

``` math
i\hbar\frac{dU}{dt} = HU \iff \frac{dU}{dt} = -\frac{iH}{\hbar}U
```

If we try it for a scalar value, it is similar to
``` math
\frac{dy}{dt} = ky(t) \implies y(t) = e^{kt}y(0)
```

Recall [[matrix-exponentials|matrix exponential]]:

Guess that $`U(t,t_0) = e^{-iHt/\hbar}U_0`$

Check:
``` math
\frac{dU}{dt} = -\frac{iH}{\hbar}e^{-iHt/\hbar}U_0 = -\frac{iH}{\hbar}U
```

Hence true.

Note $`U_0`$ is some integration constant which we haven’t defined yet.
We find $`U_0`$

``` math
I = U(t_0,t_0) = e^{-iHt_0/\hbar}U_0 \implies U_0 = e^{iHt_0/\hbar}
```

``` math
\implies U(t,t_0) = e^{-iHt/\hbar}e^{iHt_0/\hbar}
```

via [[baker-campbell-hausdorff-formula]], since $`[H,H]=0`$ (trivially as any operator commutes with itself)
``` math
U(t,t_0) = e^{-iHt/\hbar}e^{iHt_0/\hbar}
```
``` math
\Rightarrow\boxed{U(t,t_0) = e^{-iH(t-t_0)/\hbar}}
```

Hence this solves SE
``` math
i\hbar \frac{d}{dt}U(t,t_0) = HU(t,t_0)
```

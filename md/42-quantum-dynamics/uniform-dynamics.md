# Uniform dynamics

This is a time-indepndent Hamiltonian $H(t)=H$.

We set an ODE for $U$ which we derived earlier.

$$i\hbar\frac{dU}{dt} = HU \iff \frac{dU}{dt} = -\frac{iH}{\hbar}U$$

If we try it for a scalar value, it is similar to
$$\frac{dy}{dt} = ky(t) \implies y(t) = e^{kt}y(0)$$

Recall [[matrix-exponentials|matrix exponential]]:

Guess that $U(t,t_0) = e^{-iHt/\hbar}U_0$

Check:
$$\frac{dU}{dt} = -\frac{iH}{\hbar}e^{-iHt/\hbar}U_0 = -\frac{iH}{\hbar}U$$

Hence true.

Note $U_0$ is some integration constant which we haven’t defined yet.
We find $U_0$

$$I = U(t_0,t_0) = e^{-iHt_0/\hbar}U_0 \implies U_0 = e^{iHt_0/\hbar}$$

$$\implies U(t,t_0) = e^{-iHt/\hbar}e^{iHt_0/\hbar}$$

via [[baker-campbell-hausdorff-formula]], since $[H,H]=0$ (trivially as any operator commutes with itself)
$$U(t,t_0) = e^{-iHt/\hbar}e^{iHt_0/\hbar}$$
$$\Rightarrow\boxed{U(t,t_0) = e^{-iH(t-t_0)/\hbar}}$$

Hence this solves SE
$$i\hbar \frac{d}{dt}U(t,t_0) = HU(t,t_0)$$

# Uniform dynamics

This is a time-indepndent [[schrodinger-hamiltonian-i|Hamiltonian]] $H(t)=H$.

We use an ODE for $U$ which we derived earlier.

$$
i\hbar\frac{dU}{dt} = HU \iff \frac{dU}{dt} = -\frac{iH}{\hbar}U
$$
This is a differential
$$
\frac{d\hat{U}}{\hat{U}(t)}=-\frac{i\hat{H}}{\hbar}dt
$$
$$
\Rightarrow\quad\int\frac{1}{\hat{U}(t)}d\hat{U}=-\frac{i\hat{H}}{\hbar}\int dt
$$
$$
\Rightarrow\quad\ln|\hat{U}(t
)|=-\frac{i\hat{H}}{\hbar}t+C
$$
$$
$$
$$
\Rightarrow\quad |\hat{U}(t)|=e^Ce^{-i\hbar{H}t/\hbar}
$$
at $t=0$, $\hat{U}(0)=e^C$ thus
$$
\hat{U}(t) = U(0)e^{-i\hat{H}t/\hbar}
$$

Recall [[matrix-exponentials|matrix exponential]]
Hence true.

Let's see what $U(t,t_0)$ is.

Note $U_0$ is some [[integration]] constant which we haven’t defined yet.
We find $U_0$

$$
I = U(t_0,t_0) = e^{-iHt_0/\hbar}U_0 \implies U_0 = e^{iHt_0/\hbar}
$$

$$
\implies U(t,t_0) = e^{-iHt/\hbar}e^{iHt_0/\hbar}
$$

via [[baker-campbell-hausdorff]], since $[H,H]=0$ (trivially as any [[operator|operator]] [[commutators|commutes]] with itself)

$$
U(t,t_0) = e^{-iHt/\hbar}e^{iHt_0/\hbar}
$$
$$
\Rightarrow\boxed{U(t,t_0) = e^{-iH(t-t_0)/\hbar}}
$$

Hence this solves SE

$$
i\hbar \frac{d}{dt}U(t,t_0) = HU(t,t_0)
$$

### Proof

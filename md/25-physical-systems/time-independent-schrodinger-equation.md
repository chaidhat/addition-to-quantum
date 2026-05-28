# Time-Independent Schrödinger Equation

This is aka. Schrödinger equation for [[wave-function|wave functions]].

Depends on [[schrodinger-hamiltonian-ii]].

Let's derive the Schrödinger equation for wave functions.

Recall Schrödinger equation where
$$
i\hbar \frac{d}{dt}\ket{\psi(t)} = \hat{H}\ket{\psi(t)}
$$
Formal solution via the time evolution operator is
$$
\ket{\psi(t)} = \hat{U}(t)\ket{\psi(0)}, \qquad \psi(x,t) = \braket{x | \psi(t)}
$$
The question is: how do we find $\hat{U}(t)$ and $\psi(x,t)$ given $\hat{H}$

### Method 1
This is already proved in [[uniform-dynamics|uniform dynamics]]  
$$
\hat{U}(t)=e^{-i\hat{H}t/\hbar}
$$
Let's try a few Hamiltonians $\hat{H}$ out
This is a translation operator by $x_0$
$$
\hat{H}=\frac{1}{t}\hat{p}x_0
$$
This works cleanly
$$
\hat{U}(t)=e^{-i\hat{p}x_0/\hbar}
$$
However what if the Hamiltonian is the full kinetic energy + potential energy?
$$
\hat{H}=\frac{\hat{p}^2}{2m}+V(\hat{x})
$$
This doesn't work cleanly. Via [[baker-campbell-hausdorff|BCH]] we get
$$
\hat{U}(t)=e^{-i\left[\frac{\hat{p}^2}{2m} + V(\hat{x})\right]t/\hbar}  \approx  \exp\left[-\frac{i\hat{H}t}{\hbar} + \frac{it^2}{4m\hbar}[\hat{p},V'(\hat{x})] ~+ ~\cdots\right]
$$
This is a numerical approximation, not an analytical solution.

### Method 2
This is the reverse of [[schrodinger-hamiltonian-i]]. There, we postulated that particle energies are quantified and derived the Schrödinger equation from that. Here, we postulate the Schrödinger equation and derive that particle energies by applying it.

Given 

First we must diagonalize $\hat{H}$. We should find the eigenstates of $\hat{H}$
Note $\phi_n(x)$ is shortened to $\phi_n$ but basically $\phi(x)$ is an [[eigenvectoreigenvalue|eigenfunction]] representing definite energy $E$ -- it is a [[wave-function|wave function]].
$$
\hat{H}\ket{\phi_n} = E_n\ket{\phi_n}
$$
So
$$
\Rightarrow\quad\hat{U}(t)\ket{\phi_n} = e^{-i\hat{H}t/\hbar}\ket{\phi_n}
$$
$$
 = e^{-iE_n t/\hbar}\ket{\phi_n}
 $$
If we decompose this as we know any state $\ket{\psi(0)}$ is a superposition. Note that $c_n$ are [[probability-amplitude|probability amplitudes]].
$$
\ket{\psi(0)}=\sum_n c_n(0)\ket{\phi_n}
$$

By linearity, $\hat{U}(t)$ acts for all terms in $\ket{\psi(t)}=\hat{U}(t)\ket{\psi(0)}$
$$
\ket{\psi(0)}=\sum_nc_n(0)
\ket{\phi_n}$$
$$
\boxed{\ket{\psi(t)} = \sum_n c_n(t)\,e^{-iE_n t/\hbar}\ket{\phi_n}}
$$
where $c_n(t)$ is how much of $\ket{\phi_n}$ position is in the state $\ket{\psi(t)}$ at time $t$

and

### TISE
To get TISE from method 2 we start from
$$
\hat{H}|\phi_n\rangle = E_n|\phi_n\rangle
$$
[[projection|Project]] onto position basis $\ket{x}$ 
$$
\langle x|\hat{H}|\phi_n\rangle = E_n\langle x|\phi_n\rangle
$$
Note we just said above that
$$
\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x}), \qquad \langle x|\hat{p}|\phi\rangle = -i\hbar\frac{d\phi}{dx}
$$
so we arrive at the Time-Independent Schrödinger Equation (TISE)
$$
\boxed{\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)\right]\phi(x) = E\,\phi(x)}
$$

where 
$$
(\hat{U}(t)\phi)(x)=e^{-iEt/\hbar}\phi(x)
$$
$$
\implies\langle x|\hat{U}(t)|\phi_n\rangle = e^{-iE_n t/\hbar}\langle x|\phi_n\rangle
$$
$$
\implies\hat{U}(t)|\phi_n\rangle = e^{-iE_n t/\hbar}|\phi_n\rangle
$$

Note that $\phi(x)$ are stationary states. so
$$
\implies\boxed{\hat{U}(t) = \sum_n e^{-iE_n t/\hbar}\,|\phi_n\rangle\langle\phi_n|}
$$

This is sort of similar to separation of variables for PDEs.

### Energy
if we solve this out then
$$
\frac{d^2\phi(x)}{dx^2}=-k^2\phi(x)
$$
where
$$
k^2 \triangleq \frac{2mE}{\hbar^2}
$$

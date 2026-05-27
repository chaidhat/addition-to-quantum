Let there be a infinite square well where the volume density $V(x)$ is
$$
V(x) = \begin{cases} 0, & 0 \le x \le L \\ \infty, & \text{otherwise}\end{cases}
$$
### Finding wave function
Inside the well, [[time-independent-schrodinger-equation|TISE]] reduces to a free-particle form
$$
-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi \iff \frac{d^2\phi}{dx^2} = -\frac{2mE}{\hbar^2}\phi(x)
$$
A general solution to this is (it's a harmonic oscillator)
$$
\phi(x) = a\,e^{ikx} + b\,e^{-ikx} = A\sin(kx) + B\cos(kx)
$$
where
$$
k\triangleq \sqrt{2mE/\hbar^2}
$$

Find $B$
Let's set the boundary conditions
$$
\phi(x)=0\quad x\leq0,x\geq L
$$
and 
$$
\phi(0)=0\Rightarrow B=0
$$
Find $k_n$
$$
\phi(L)=0\Rightarrow \sin(kL)=0\Rightarrow kL=n\pi\quad n\in\mathbb{Z^+}
$$
so
$$
k_n = \frac{n\pi}{L}
$$
Find $A$ by normalizing
$$
1 = A_n^2\,\frac{L}{2} \implies A_n = \sqrt{\frac{2}{L}}
$$
Hence
$$
\boxed{\phi_n(x) = \sqrt{\frac{2}{L}}\sin\!\left(\frac{n\pi x}{L}\right)}
$$
This wave function means at at $n$ energies there are $n-1$ nodes in the $\sin$ curve

When the potential is symmetric after recentering box around origin i.e.,
$$
-V(-x)=V(x)
$$
The Hamiltonian commutes with parity operator
$$
\hat{P}\phi(x)=\phi(-x)
$$
Then
$$
[\hat{H},\hat{P}]=0
$$
### Finding Energy
Recall that we defined $k$ right above. Rearranging gives
$$
\boxed{
E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2\pi^2\hbar^2}{2mL^2}}
$$

### Example

superposition of ground and first excited states
$$
\psi(x, 0) = \frac{1}{\sqrt{2}}\phi_1(x) + \frac{1}{\sqrt{2}}\phi_2(x) \equiv \frac{1}{\sqrt{2}}\big(\ket{1} + \ket{2}\big)
$$
Substitute
$$
\phi_n(x) = \sqrt{\frac{2}{L}}\sin\!\left(\frac{n\pi x}{L}\right)
$$
to get
$$
\psi(x, 0) = \frac{1}{\sqrt{L}}\big[\sin(k_1 x) + \sin(k_2 x)\big]
$$

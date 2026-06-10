
We are going to look at a problem

$$
V(x)=\begin{cases}V_L &x\leq x_L\\ \text{$v$\quad s.t.\quad$v<V_{max}$} & x_L<x\leq x_R\\ V_R &x>x_R\end{cases}
$$

A particle is fired from the left. Describe the $J(x)$ of the particle in all states

# Reflecting state

Extends [[flow-of-probability]], [[stationary-states-1d]]

This is when 
$$
V_L<E<V_R
$$

Let $x_R>x_L$

Let wave function $\phi(x)$ be

$$
\phi(x) = \begin{cases} A e^{ik_L x} + B e^{-ik_L x} & x < x_L \\ C e^{-b_R x} & x > x_R \end{cases}
$$
If $x_L<x<x_R$, then $\phi(x)$ is whatever solves TISE -- it doesn't really matter.

Let's examine the [[stationary-states-1d|1D stationary state]] in the reflecting state where $E<V_L, V_R$

In each region $V$ is constant, the [[time-independent-schrodinger-equation|TISE]]

$$
-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2}+V\phi=E\phi
$$

$$
\frac{d^2\phi}{dx^2}=\frac{2m(V-E)}{\hbar^2}\phi
$$

Let

$$
\lambda^2 \triangleq \frac{2m(V - E)}{\hbar^2}\triangleq c, \qquad\Rightarrow\qquad \lambda \triangleq \pm\frac{\sqrt{2m(V - E)}}{\hbar}\triangleq \pm\sqrt{c}
$$

So

$$
\frac{d^2\phi}{dx^2} = \lambda^2\,\phi
$$

This is an ODE. To solve we let

$$
\phi(x)=e^{\pm \lambda x}
$$

Let's try the negative case first. Let $\phi(x)\triangleq e^{-\lambda x}$

$$
\frac{d^2}{dx^2}e^{-\lambda x} = \frac{d}{dx}\big(-\lambda\,e^{-\lambda x}\big) = (-\lambda)(-\lambda)\,e^{-\lambda x} = (-\lambda)^2 e^{-\lambda x}
$$

$$
\Rightarrow\quad \frac{d^2\phi}{dx^2} = \lambda^2\,\phi
$$

$$
\Rightarrow\quad (-\lambda)^2 e^{-\lambda x} = \lambda^2\,(e^{-\lambda x})
$$
true

Let's try the positive case $$\phi(x)\triangleq e^{-\lambda x}$$
$$
\frac{d^2}{dx^2}e^{+\lambda x} = \frac{d}{dx}\big(\lambda e^{+\lambda x}\big) = (\lambda)(\lambda)e^{+\lambda x} = \lambda^2 e^{+\lambda x}
$$

$$
\Rightarrow\quad (+\lambda)^2 e^{\lambda x} = \lambda^2\,(e^{\lambda x})
$$

also works.

The general solution is therefore

$$
\phi(x) = \alpha\,e^{+\lambda x} + \beta\,e^{-\lambda x}
$$

## Solving For Cases
### Case 1

Let's consider $E>V_L$

Recall that 

$$
\lambda^2 \triangleq \frac{2m(V - E)}{\hbar^2}\triangleq c
$$

Let $V=V_L$


$$
V_L-E<0
$$

so

$$
\lambda^2 \triangleq \frac{2m(V_L - E)}{\hbar^2}<0
$$

$$
\lambda^2<0
$$

which means $\lambda$ must be imaginary. Let $k_L$ be real and positive

$$
k_L^2 \triangleq -\frac{2m(V_L-E)}{\hbar^2} > 0 \quad\Rightarrow\quad \lambda^2 = -k_L^2
$$

$$
\lambda = \pm\sqrt{-k_L^2} = \pm\sqrt{-1}\,\sqrt{k_L^2} = \pm i\,k_L
$$
sub back into

$$
\phi(x) = e^{\pm i k_L x} \quad\Rightarrow\quad \phi(x) = A e^{i k_L x} + B e^{-i k_L x}
$$

### Case 2

Consider $E<V_R$

So

$$
V_R-E>0
$$

so

$$
\lambda^2>0
$$

so it must be real. Let $b_R$ be real and positive

$$
b_R^2 \triangleq \frac{2m(V_R - E)}{\hbar^2} > 0 \quad\Rightarrow\quad \lambda = \pm\sqrt{b_R^2} = \pm b_R
$$

sub back into

$$
\phi(x) = D\,e^{+b_R x} + C\,e^{-b_R x}
$$

as $x$ goes to $+\infty$ then $e^{+b_Rx}$ diverges unless $\alpha=0$ 

$$
\phi(x) = C\,e^{-b_R x}
$$

## Working out Probability current

Working it out [[probability-current]] $J$

Let

$$
\omega\triangleq \phi^*\frac{\partial \phi}{\partial x}
$$

$$
\omega^*=\omega = -(\omega -\omega^*)=-2iIm(\omega)
$$

So from the definition of J

$$
J(x,t) \triangleq \frac{i\hbar}{2m}\left(\frac{\partial\psi^*}{\partial x}\psi - \psi^*\frac{\partial\psi}{\partial x}\right)
$$

$$
= \frac{i\hbar}{2m}(w^* - w)
$$

$$
 = \frac{i\hbar}{2m}\big(-2i\,\mathbb{Im}(w)\big) = \frac{\hbar}{m}\mathbb{Im}(w)
$$

$$
= \frac{\hbar}{m}\,\mathbb{Im}\!\left(\phi^*\frac{d\phi}{dx}\right)
$$

### Case 1

Let's consider $E>V_L$

$$
\frac{d}{dx}\phi = ik_L A e^{ik_L x} - ik_L B e^{-ik_L x}
$$

$$
\phi^* = A^* e^{-ik_L x} + B^* e^{ik_L x}
$$

$$
\omega=\phi^* \frac{d}{dx}\phi = ik_L\Big(|A|^2 - |B|^2 - A^* B e^{-2ik_L x} + A B^* e^{2ik_L x}\Big)
$$

sub back to get

$$
= \frac{\hbar}{m}\,\mathbb{Im}\!\left(ik_L|A|^2-ik_L|B|^2\right)
$$

$$
= \frac{\hbar k_L}{m}\left(|A|^2-|B|^2\right)
$$



### Case 2

Let's consider $E<V_R$

$$
w = \phi^*\frac{d}{dx}\phi = (C^*e^{-b_R x})(-b_R C e^{-b_R x}) = -b_R|C|^2 e^{-2b_R x}
$$

$$
J = \frac{\hbar}{m}\,\mathbb{Im}\big(-b_R|C|^2 e^{-2b_R x}\big)
$$

$$
= \frac{\hbar}{m}(0) = 0
$$

### Combining

 That means the probability current $J$ is this

$$
J(x,t) = \begin{cases} \dfrac{\hbar k_L}{m}\big(|A|^2 - |B|^2\big) & x < x_L \\[2mm] 0 & x > x_R \end{cases}
$$

The physical reason is that the right side is a dead end tail that transmit to nothing, so in [[stationary-states|steady state]] all incoming probabikity must be reflected back. Incoming flux is outgoing flux. $|A|^2=|B|^2$ must be true per [[flow-of-probability]].

# Scattering State

This is when 

$$
E>V_L, V_R
$$

and we already know from [[probability-current-problem-1]] that

$$
\phi(x) = \begin{cases} A e^{ik_L x} + B e^{-ik_L x} & x < x_L \\ C e^{ik_R x} + De^{-ik_Rx} & x > x_R \end{cases}
$$

Note that $x<x_L$ and $x>x_R$ is like that because $E>V_L, V_R$ 

Because we're describing a particle fired from the left only, there is nothing coming in from right to left so $D=0$.

so

$$
J(x,t) = \begin{cases} \frac{\hbar k_L}{m}\big(|A|^2 - |B|^2\big) & x < x_L \\ \frac{\hbar k_R}{m}|C|^2 & x > x_R \end{cases}
$$

Reflection wise [[transmission-reflection-coefficients]]:

A is incident, B is reflected, C is transmitted

$$
R = \frac{|B|^2}{|A|^2}
$$

$$
T = \frac{k_R|C|^2}{k_L|A|^2}, \qquad R + T = 1
$$

$T>0$ even if $E<V_{max}$ which means a particle with less energy than the potential usually gets stuck. In quantum physics, it is possible for it to transmit through this barrier. This is known as quantum tunnelling

$R>0$

# Bound State

This is when 

$$
E<V_L, V_R
$$

so

$$
\phi(x) = \begin{cases} A e^{b_R x} + Be^{-b_Rx} & x < x_L \\ D e^{b_R x} + Ce^{-b_Rx} & x > x_R \end{cases}
$$

Left region, if $x\rightarrow -\infty$ then the $B$ term will blow up so $B=0$
Right region, if $x\rightarrow \infty$ then the $D$ term will blow up so $D=0$

$$
\phi(x) = \begin{cases} A e^{b_R x}& x < x_L \\ Ce^{-b_Rx} & x > x_R \end{cases}
$$

A bound state must decay to zero on both sides. 



This means that energy is quantized for bound.

$$
E \in \{E_0, E_1, E_2, \dots\}
$$

this is because, as counterpoint if $E$ is continuous, a wavefunction DNE in between the energies.
this is because the left tail $Ae^{b_Lx}$ decays to 0 (is [[evanescent]]). Integrate the middle. You'd need a right tail that also decays so 
$$
\frac{\frac{d \phi}{dx}(x_R)}{\phi(x_R)}=-b_R
$$
must be true. If it isn't true then $D\neq 0$ needs to be drue but that blows it up.

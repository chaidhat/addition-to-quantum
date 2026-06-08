We are going to look at a problem

$$
V(x) = \begin{cases} 0 & x < 0 \\ V_0 & x \geq 0 \end{cases}
$$

Describe the $J(x)$ of the particle in all states

# Reflecting State

This is when 
$$
V_L<E<V_R
$$

Like the way to figure this out is to probably solve the ODEs

$$
\phi(x) = \begin{cases} e^{ikx} + Be^{-ikx} & x < 0 \\ Ce^{-bx} & x \geq 0 \end{cases}
$$

Like the way to figure this out is to probably solve the ODEs
We set $A=1$ to fix overall scale

$$
k = \sqrt{\frac{2mE}{\hbar^2}}, \qquad b = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}
$$

Note that $e^{ikx}$ is incident and $Be^{-ikx}$ is the reflected 

Let $x=0$

$$
1 + B = C\tag{1}
$$

$$
\frac{d}{dx}\left(e^{ikx}+Be^{-ikx}\right) = ik\,e^{ikx} - ikB\,e^{-ikx}
$$

$$
\xrightarrow{x=0}\; ik(1-B)
$$

$$
\frac{d}{dx}\left(Ce^{-bx}\right) = -bC\,e^{-bx} \;\xrightarrow{x=0}\; -bC
$$

so

$$
ik(1 - B) = -bC\tag{2}
$$

solving $B,C$ -> sub (1) into (2)

$$
ik(1-B) = -b(1+B)
$$

expand both sides

$$
ik - ikB = -b - bB
$$

$$
ik + b = B(ik - b)
$$

$$
B = \frac{ik + b}{ik - b}
$$

$$
C = 1 + B = \frac{(ik - b) + (ik + b)}{ik - b} = \frac{2ik}{ik - b}
$$

## Reflection coefficient

Look at $B$ we take denom and numerator and simplify them

$$
|ik + b|^2 = b^2 + k^2, \qquad |ik - b|^2 = b^2 + k^2
$$

$$
|B|^2 = \frac{b^2 + k^2}{b^2 + k^2} = 1 \;\Rightarrow\; R = 1
$$

## Transmission coefficient

$$
C = \frac{2i\sqrt{E}}{i\sqrt{E} - \sqrt{V_0 - E}}
$$

so at $E\rightarrow 0$ then $|C|\rightarrow 0$. The wave dies at the wall and doesn't penetrate
at $E\rightarrow V_0$ then $|C|\rightarrow 2$. The barrier becomes transparent and amplitude double

Note
$$
T=0
$$

as reflection coefficient is one. A real exponential carries no current.

# Scattering State

This occurs when
$$
E>V_L, V_R
$$

Solving ODE we get

$$
\phi(x) = \begin{cases} e^{ikx} + Be^{-ikx} & x < 0 \\ Ce^{ik'x} & x \geq 0 \end{cases}
$$

where
$$
k = \sqrt{\frac{2mE}{\hbar^2}}, \qquad k' = \sqrt{\frac{2m(E - V_0)}{\hbar^2}}
$$

Let's match $x=0$ again

$$
1 + B = C \tag{1}
$$

evaluate the $x<0$ case at $x=0$

$$
\frac{d}{dx}\left(e^{ikx} + Be^{-ikx}\right)\Big|_{0} = ik(1 - B)
$$

$$
\frac{d}{dx}\left(Ce^{ik'x}\right)\Big|_{0} = ik'C
$$

$$
ik(1 - B) = ik'C \tag{2}
$$

Solving $B,C$ -> sub (1) into (2)

$$
k(1 - B) = k'(1 + B)
$$

$$
k - kB = k' + k'B \;\Rightarrow\; k - k' = B(k + k')
$$

$$
B = \frac{k - k'}{k + k'} = \frac{\sqrt{E} - \sqrt{E - V_0}}{\sqrt{E} + \sqrt{E - V_0}}
$$

$$
C = 1 + B = \frac{2k}{k + k'} = \frac{2\sqrt{E}}{\sqrt{E} + \sqrt{E - V_0}}
$$

## Reflection Coefficient

$$
R = |B|^2
$$

## Transmission Coefficient

We can't just use $|C|^2$ because the transmitted wave moves at a different speed as $k'\neq k$

We compare currents

$$
T = \frac{k'}{k}|C|^2 = 1 - R
$$

# Bound State

not possible. There's no well.
# Differentiation

To differentiate something means to see how fast it changes with respect
to (w.r.t) something else changing, for example, time $t$. Imagine you step forward in time by a very small step $h$.
As $h\rightarrow 0$, the change in $x$ becomes the derivative of $x$ with respect to time.

$$\frac{d}{dt}f(t)=\lim_{h\to 0} \frac{f(t+h)-f(t)}{h}$$

To do this, us humans developed some nifty tricks. Here’s all of them.

$$\begin{align*}
    \frac{d}{dx}[f(x) \pm g(x)]                & = f'(x) \pm g'(x)                                                    \\
    \frac{d}{dx}[x^n]                          & = nx^{n-1}                                                           \\
    \frac{d}{dx}[f(x)g(x)]                     & = f'(x)g(x) + f(x)g'(x)                                              \\
    \frac{d}{dx}[f(g(x))]                      & = f'(g(x))\,g'(x)                                                    \\
    \frac{d}{dx}[e^x]                          & = e^x                                                                \\
    \frac{d}{dx}[a^x]                          & = a^x \ln(a)                                                         \\
    \frac{d}{dx}[\ln(x)]                       & = \frac{1}{x}                                                        \\
    \frac{d}{dx}[\log_a(x)]                    & = \frac{1}{x \ln(a)}                                                 \\
    \frac{d}{dx}[\sin(x)]                      & = \cos(x)                                                            \\
    \frac{d}{dx}[\cos(x)]                      & = -\sin(x)                                                           \\
    \frac{d}{dx}[\tan(x)]                      & = \left(\frac{1}{\cos(x)}\right)^2                                   \\
    \frac{d}{dx}\left(\frac{1}{\tan(x)}\right) & = \frac{1}{\sin^2 (x)}                                               \\
    \frac{d}{dx}\left(\frac{1}{\cos(x)}\right) & = \frac{\sin x}{\cos^2 x}                                            \\
    \frac{d}{dx}\left(\frac{1}{\sin(x)}\right) & = -\frac{\cos x}{\sin^2 x}                                           \\
    \frac{d}{dx}[\arcsin(x)]                   & = \frac{1}{\sqrt{1 - x^2}}                                           \\
    \frac{d}{dx}[\arccos(x)]                   & = -\frac{1}{\sqrt{1 - x^2}}                                          \\
    \frac{d}{dx}[\arctan(x)]                   & = \frac{1}{1 + x^2}                                                  \\
    \frac{d}{dx}[\operatorname{arccot}(x)]     & = -\frac{1}{1 + x^2}                                                 \\
    \frac{d}{dx}[\operatorname{arcsec}(x)]     & = \frac{1}{|x|\sqrt{x^2 - 1}}                                        \\
    \frac{d}{dx}[\operatorname{arccsc}(x)]     & = -\frac{1}{|x|\sqrt{x^2 - 1}}                                       \\
    \frac{d}{dx}[f(x)^{g(x)}]                  & = f(x)^{g(x)} \left[g'(x)\ln(f(x)) + \frac{g(x)\,f'(x)}{f(x)}\right] \\
    \frac{d}{dx}[f^{-1}(x)]                    & = \frac{1}{f'(f^{-1}(x))}                                            \\
    \frac{d^n}{dx^n}[f(x)g(x)]                 & = \sum_{k=0}^{n} \binom{n}{k} f^{(k)}(x)\,g^{(n-k)}(x)
\end{align*}$$
